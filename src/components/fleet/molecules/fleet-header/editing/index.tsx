import { ChangeEvent, FC, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isFleetType } from "../../../../../core/util/is-fleet-type";
import {
  FleetDescriptionState,
  FleetNameState,
  FleetType,
  FleetTypeState,
} from "../../../../../store/organize/info";
import { Button } from "../../../../common/button";
import {
  Dialog,
  DialogActions,
  DialogContent,
} from "../../../../common/dialog";
import { Field, Select, Textarea, TextInput } from "../../../../common/field";

type Props = {
  editing: boolean;
  endEdit: () => void;
};
export const Editing: FC<Props> = ({ editing, endEdit }) => {
  const [title, setTitle] = useRecoilState(FleetNameState);
  const [description, setDescription] = useRecoilState(FleetDescriptionState);
  const [type, setType] = useRecoilState(FleetTypeState);

  const [tempTitle, setTempTitle] = useState<FleetNameState>(title);
  const [tempDescription, setTempDescription] = useState<FleetDescriptionState>(
    description
  );
  const [tempType, setTempType] = useState<FleetTypeState>(type);

  useEffect(() => {
    setTempTitle(title);
    setTempDescription(description);
    setTempType(type);
  }, [description, editing, title, type]);

  const handler = {
    onFleetTitleChange: (e: ChangeEvent<HTMLInputElement>) => {
      setTempTitle(e.target.value);
    },
    onFleetDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
      setTempDescription(e.target.value);
    },
    onFleetTypeChange: (e: ChangeEvent<HTMLSelectElement>) => {
      if (!isFleetType(e.target.value)) throw new Error("Error: 無効な値");
      setTempType(e.target.value);
    },

    onSubmit: () => {
      setTitle(tempTitle);
      setDescription(tempDescription);
      setType(tempType);
      endEdit();
    },
    onCancel: () => {
      endEdit();
    },
  };

  return (
    <Dialog open={editing} onClose={endEdit}>
      <DialogContent>
        <Field fullWidth label="題名" value={tempTitle}>
          <TextInput onChange={handler.onFleetTitleChange} />
        </Field>
        <Field fullWidth label="說明" value={tempDescription}>
          <Textarea onChange={handler.onFleetDescriptionChange} />
        </Field>
        <Field fullWidth label="艦隊編成" value={tempType}>
          <Select
            options={[
              { label: "通常艦隊", value: FleetType.Normal },
              { label: "空母機動部隊", value: FleetType.Carrier },
              { label: "水上打撃部隊", value: FleetType.Surface },
              { label: "輸送護衛部隊", value: FleetType.Transport },
              { label: "遊撃部隊", value: FleetType.StrikingForce },
            ]}
            onChange={handler.onFleetTypeChange}
          />
        </Field>
      </DialogContent>
      <DialogActions>
        <Button label="キャンセル" onClick={handler.onCancel} />
        <Button type="outline" label="保存する" onClick={handler.onSubmit} />
      </DialogActions>
    </Dialog>
  );
};
