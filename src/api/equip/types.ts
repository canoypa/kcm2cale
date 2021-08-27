import { Equipment } from "~/models/equipment";

/** firestore 更新時に受け渡すデータ形式 */
export type SettableEquip = Omit<Equipment, "id">;
