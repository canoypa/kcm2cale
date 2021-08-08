import { useEffect } from "react";

type DidMountCallBack = () => void;
export const useDidMount = (callback: DidMountCallBack) => {
  useEffect(callback, []);
};

type WillUnmountCallBack = () => void;
export const useWillUnmount = (callback: WillUnmountCallBack) => {
  useEffect(() => callback, []);
};
