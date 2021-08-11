import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useContext, useMemo, useState } from "react";
import { getFirestore } from "../../../../../core/firebase/sdk/firestore";
import { FleetType } from "../../../../../models/fleet";
import { FleetIdContext } from "../../../fleetIdContext";
import { useFleet } from "../../../hooks";

export const useEditFleetInfo = () => {
  const firestore = getFirestore();
  const fleetId = useContext(FleetIdContext);
  const { data: fleet } = useFleet(fleetId);

  const [title, setTitle] = useState<string>(fleet?.title ?? "");
  const [description, setDes] = useState<string>(fleet?.description ?? "");
  const [type, setType] = useState<FleetType>(fleet?.type ?? FleetType.Normal);

  const submit = () => {
    const fleetDocRef = doc(firestore, `fleets/${fleet?.id}`);

    updateDoc(fleetDocRef, {
      title,
      description,
      type,
      updatedAt: serverTimestamp(),
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
