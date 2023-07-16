import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useCreateNewFleet } from "./useCreateNewFleet";

// 編成を新規作成してリダイレクト
export const NewFleet: FC = () => {
  const { replace } = useRouter();
  const createNewFleet = useCreateNewFleet();

  // const { data: user } = useUser();

  useEffect(
    () => {
      // 未認証の場合スキップ
      // if (user) {
      createNewFleet().then((fleetId) => {
        replace(`/fleet/${fleetId}`);
      });
      // }
    },
    [
      /* user */
    ]
  );

  return null;
};
export default NewFleet;
