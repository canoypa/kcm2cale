import { CurrentEquipmentStatus, EquipmentStatus } from "./types";

const createStatus = (baseStatus: EquipmentStatus): CurrentEquipmentStatus => {
  const { validProficiency, validImprovement, ...status } = baseStatus;

  return Object.assign(
    status,
    validProficiency && { proficiency: 0 },
    validImprovement && { improvement: 0 }
  );
};
