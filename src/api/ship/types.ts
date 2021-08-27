import { Ship } from "~/models/ship";

/** firestore 更新時に受け渡すデータ形式 */
export type SettableShip = Omit<Ship, "id">;
