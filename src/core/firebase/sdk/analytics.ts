import { getAnalytics as originalGetAnalytics } from "firebase/analytics";
import { firebaseApp } from "./app";

export const getAnalytics = () => originalGetAnalytics(firebaseApp);

if (typeof window !== "undefined") getAnalytics();
