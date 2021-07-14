import { FC } from "react";
import { useHistory } from "react-router";
import { useUser } from "reactfire";
import { useDidMount } from "../../util/hooks/lifecycle";
import { useCreateNewFleet } from "./useCreateNewFleet";

// 編成を新規作成してリダイレクト
export const NewFleet: FC = () => {
  const { replace } = useHistory();
  const createNewFleet = useCreateNewFleet();

  const { data: user } = useUser();

  useDidMount(() => {
    createNewFleet(user.uid).then((newFleetId) => {
      replace(`/fleet/${newFleetId}`);
    });
  });

  return null;
};

export default NewFleet;
