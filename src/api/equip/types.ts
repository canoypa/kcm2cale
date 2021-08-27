import { Equip } from "~/models/equip";

/** firestore 更新時に受け渡すデータ形式 */
export type SettableEquip = Omit<Equip, "id">;
