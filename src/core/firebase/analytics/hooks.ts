import { useCallback } from "react";
import { useAnalytics } from "../../../store/firebase/sdk";

export const usePageViewLog = () => {
  const analytics = useAnalytics();

  return useCallback((title: string) => {
    analytics.logEvent("page_view", {
      page_title: title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }, []);
};
