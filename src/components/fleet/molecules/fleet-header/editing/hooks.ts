import { useMemo, useState } from "react";
import { useParams } from "react-router";
import { useFirestore } from "reactfire";
import { useFireFleet } from "../../../../../hooks/organize/fleet";

export const useEditFleetInfo = () => {
  // Todo: useParams 使用箇所
  const { fleetId } = useParams<{ fleetId: string }>();
  const fleetState = useFireFleet(fleetId);

  const firestore = useFirestore();

  const [title, setTitle] = useState(fleetState.title);
  const [description, setDes] = useState(fleetState.description);
  const [type, setType] = useState(fleetState.type);

  const submit = () => {
    const fleetDocRef = firestore.doc(`fleets/${fleetState.id}`);

    fleetDocRef.update({ title, description, type });
  };

  return {
    title: title,
    description: description,
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
