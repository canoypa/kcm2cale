import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useUser } from "../../hooks/firebase/auth/useUser";
import { useCreateNewFleet } from "./useCreateNewFleet";

// 編成を新規作成してリダイレクト
export const NewFleet: FC = () => {
  const { replace } = useRouter();
  const createNewFleet = useCreateNewFleet();

  const { data: user } = useUser();

  useEffect(() => {
    // 未認証の場合スキップ
    if (user) {
      createNewFleet(user.uid).then((newFleetId) => {
        replace(`/fleet/${newFleetId}`);
      });
    }
  }, [user]);

  return null;
};
export default NewFleet;
