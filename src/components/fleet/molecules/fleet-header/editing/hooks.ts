import { useContext, useMemo, useState } from "react";
import { firebase } from "../../../../../core/firebase/app";
import { FleetType } from "../../../../../models/fleet";
import { useFirestore } from "../../../../../store/firebase/sdk";
import { FleetContext } from "../../../contexts";

export const useEditFleetInfo = () => {
  const firestore = useFirestore();

  const fleet = useContext(FleetContext);

  const [title, setTitle] = useState<string>(fleet?.title ?? "");
  const [description, setDes] = useState<string>(fleet?.description ?? "");
  const [type, setType] = useState<FleetType>(fleet?.type ?? FleetType.Normal);

  const submit = () => {
    const fleetDocRef = firestore.doc(`fleets/${fleet?.id}`);

    fleetDocRef.update({
      title,
      description,
      type,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
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
