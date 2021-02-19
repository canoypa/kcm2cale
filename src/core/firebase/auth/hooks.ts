import { useEffect, useState } from "react";
import { firebaseAuth } from ".";

export const useUser = () => {
  const [currentUser, setUser] = useState({
    state: "loading",
    contents: firebaseAuth().currentUser,
  });

  useEffect(() => {
    firebaseAuth().onAuthStateChanged((user) => {
      setUser({ state: "hasValue", contents: user });
    });
  }, []);

  return currentUser;
};
