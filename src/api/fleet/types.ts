import { Fleet } from "~/models/fleet";

/** firestore 更新時に受け渡すデータ形式 */
export type SettableFleet = Omit<Fleet, "id" | "createdAt" | "updatedAt">;
