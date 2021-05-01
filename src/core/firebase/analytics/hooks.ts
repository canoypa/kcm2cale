import { useCallback } from "react";
import { firebaseAnalytics } from ".";

export const usePageViewLog = () => {
  return useCallback((title: string) => {
    firebaseAnalytics.logEvent("page_view", {
      page_title: title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }, []);
};
