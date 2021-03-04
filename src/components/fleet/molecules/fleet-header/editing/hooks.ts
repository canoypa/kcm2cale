import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  FleetDescriptionState,
  FleetNameState,
  FleetTypeState,
} from "../../../../../store/organize/info";

export const useEditFleetInfo = () => {
  const [titleState, setTitleState] = useRecoilState(FleetNameState);
  const [desState, setDesState] = useRecoilState(FleetDescriptionState);
  const [typeState, setTypeState] = useRecoilState(FleetTypeState);

  const [title, setTitle] = useState(titleState);
  const [des, setDes] = useState(desState);
  const [type, setType] = useState(typeState);

  const submit = () => {
    setTitleState(title);
    setDesState(des);
    setTypeState(type);
  };

  return {
    title: title,
    description: des,
    type: type,

    setTitle: setTitle,
    setDescription: setDes,
    setType: setType,

    submit,
  };
};
