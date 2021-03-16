import { useMemo, useState } from "react";
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

type Valid = {
  error: boolean;
  countText: string;
};

/** 文字数をカウント */
const countCharacter = (text: string): number => [...text].length;

/**
 * 指定の文字数以下かどうかとカウンタテキストを返す
 *
 * @param text カウント対象のテキスト
 * @param count 文字数
 */
const getValidCharCount = (text: string, count: number): Valid => {
  const textCount = countCharacter(text);
  const error = textCount > count;
  const countText = `${textCount}/${count}`;

  return {
    error,
    countText,
  };
};

/**
 * 指定の文字数以下かどうかとカウンタテキストを返す
 *
 * @param text カウント対象のテキスト
 * @param count 文字数
 */
export const useCountValid = (text: string, count: number) => {
  return useMemo(() => getValidCharCount(text, count), [text, count]);
};
