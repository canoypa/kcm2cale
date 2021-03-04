import { ChangeEvent, FC, useMemo } from "react";
import { isFleetType } from "../../../../../core/util/is-fleet-type";
import { FleetType } from "../../../../../store/organize/info";
import { Button } from "../../../../common/button";
import {
  Dialog,
  DialogActions,
  DialogContent,
} from "../../../../common/dialog";
import { Field, Select, Textarea, TextInput } from "../../../../common/field";
import { useCountValid, useEditFleetInfo } from "./hooks";

const TitleCharCount = 256;
const DescriptionCharCount = 512;

type Props = {
  editing: boolean;
  endEdit: () => void;
};
export const Editing: FC<Props> = ({ editing, endEdit }) => {
  const {
    title,
    description,
    type,
    setTitle,
    setDescription,
    setType,
    submit,
  } = useEditFleetInfo();

  const titleValid = useCountValid(title, TitleCharCount);
  const descriptionValid = useCountValid(description, DescriptionCharCount);
  const isValidInfo = useMemo(
    () => titleValid.error || descriptionValid.error,
    [titleValid, descriptionValid]
  );

  const handler = {
    onFleetTitleChange: (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    onFleetDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
    },
    onFleetTypeChange: (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setType(isFleetType(value) ? value : "Normal");
    },

    onSubmit: () => {
      submit();
      endEdit();
    },
  };

  return (
    <Dialog open={editing} onClose={endEdit}>
      <DialogContent>
        <Field
          fullWidth
          label="題名"
          value={title}
          error={titleValid.error}
          counter={titleValid.countText}
        >
          <TextInput onChange={handler.onFleetTitleChange} />
        </Field>
        <Field
          fullWidth
          label="說明"
          value={description}
          error={descriptionValid.error}
          counter={descriptionValid.countText}
        >
          <Textarea onChange={handler.onFleetDescriptionChange} />
        </Field>
        <Field fullWidth label="艦隊編成" value={type}>
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
        <Button label="キャンセル" onClick={endEdit} />
        <Button
          type="outline"
          label="保存する"
          onClick={handler.onSubmit}
          disabled={isValidInfo}
        />
      </DialogActions>
    </Dialog>
  );
};
