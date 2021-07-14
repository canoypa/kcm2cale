import { FC, useEffect } from "react";
import { useHistory } from "react-router";
import { useUser } from "reactfire";
import { useCreateNewFleet } from "./useCreateNewFleet";

// 編成を新規作成してリダイレクト
export const NewFleet: FC = () => {
  const { replace } = useHistory();
  const createNewFleet = useCreateNewFleet();

  const { data: user } = useUser();

  useEffect(() => {
    // 未認証の場合スキップ
    if (!user) return;

    createNewFleet(user.uid).then((newFleetId) => {
      replace(`/fleet/${newFleetId}`);
    });
  }, [user]);

  return null;
};

export default NewFleet;
