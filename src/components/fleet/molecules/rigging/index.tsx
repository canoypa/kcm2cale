import { FC } from "react";
import { FleetStateValue } from "../../../../store/organize/ships";
import { Chip } from "../../../common/chip";
import { MaterialIcon } from "../../../common/icons";
import { SelectEquipment } from "../../templates/select-equipment";
import { EquipmentList } from "../equipments-list";
import { useRigging } from "./hook";
import * as styles from "./styles";
import { useSelectEquipment } from "./use-select-equipment";

type Props = {
  fleetPlace: FleetStateValue;
};
export const Rigging: FC<Props> = ({ fleetPlace }) => {
  const [isOpenDialog, selecting] = useSelectEquipment();
  const {
    shipEquipments,
    isCanAddNewEquipment,
    newEquipmentSlotNo,
  } = useRigging(fleetPlace);

  const handlerAddEquipment = (slotNo: number, equipmentId: string | null) =>
    selecting.start({ shipId: fleetPlace.shipId, slotNo, equipmentId });

  const handlerAddNewEquipment = () =>
    handlerAddEquipment(newEquipmentSlotNo, null);

  return (
    <>
      <div className={styles.root}>
        <EquipmentList
          shipEquipments={shipEquipments}
          swapEquipment={handlerAddEquipment}
        />
        {isCanAddNewEquipment && (
          <div className={styles.addEquipmentButtonArea}>
            <Chip
              icon={<MaterialIcon icon="add" />}
              label="装備を追加"
              onActivated={handlerAddNewEquipment}
            />
          </div>
        )}
      </div>

      {isOpenDialog && (
        <SelectEquipment onSelect={selecting.end} onClose={selecting.cancel} />
      )}
    </>
  );
};
