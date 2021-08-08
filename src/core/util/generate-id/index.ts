import { nanoid } from "nanoid";

/** 編成id を生成 */
export const generateFleetId = () => nanoid(16);

/** 艦id を生成 */
export const generateShipId = () => nanoid(8);

/** 装備id を生成 */
export const generateEquipmentId = () => nanoid(8);
