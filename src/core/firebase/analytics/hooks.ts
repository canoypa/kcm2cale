import { useEffect } from "react";
import { firebaseAnalytics } from ".";

export const usePageViewLog = (title: string) => {
  useEffect(() => {
    firebaseAnalytics.logEvent("page_view", {
      page_title: title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  });
};
