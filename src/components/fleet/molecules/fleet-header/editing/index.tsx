import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  TextField,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { NavigateBefore } from "@material-ui/icons";
import { ChangeEvent, FC, useMemo } from "react";
import { isFleetType } from "../../../../../core/util/is-fleet-type";
import { FleetType } from "../../../../../models/fleet";
import { useCountValid, useEditFleetInfo } from "./hooks";

const TitleCharCount = 256;
const DescriptionCharCount = 512;

const FleetTypeOptions = [
  { label: "通常艦隊", value: FleetType.Normal },
  { label: "空母機動部隊", value: FleetType.Carrier },
  { label: "水上打撃部隊", value: FleetType.Surface },
  { label: "輸送護衛部隊", value: FleetType.Transport },
  { label: "遊撃部隊", value: FleetType.Striking },
];

type Props = {
  open: boolean;
  onEnd: () => void;
};
export const Editing: FC<Props> = ({ open, onEnd }) => {
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

  const theme = useTheme();
  const fullScreenBreakPoint = useMediaQuery(theme.breakpoints.down("sm"));

  const handler = {
    onFleetTitleChange: (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    onFleetDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
    },
    onFleetTypeChange: (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setType(isFleetType(value) ? value : FleetType.Normal);
    },

    onSubmit: () => {
      submit();
      onEnd();
    },
  };

  return (
    <Dialog open={open} onClose={onEnd} fullScreen={fullScreenBreakPoint}>
      {fullScreenBreakPoint && (
        <AppBar position="static" elevation={0} color="transparent">
          <Toolbar>
            <IconButton onClick={onEnd} aria-label="戻る" size="large">
              <NavigateBefore />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
      <DialogTitle>編成を編集</DialogTitle>
      <DialogContent>
        <Box mt={1}>
          <TextField
            variant="outlined"
            label="編成名"
            value={title}
            helperText={titleValid.countText}
            error={titleValid.error}
            onChange={handler.onFleetTitleChange}
            fullWidth
            autoFocus
          />
        </Box>

        <Box mt={2}>
          <TextField
            variant="outlined"
            label="説明"
            value={description}
            helperText={descriptionValid.countText}
            error={descriptionValid.error}
            onChange={handler.onFleetDescriptionChange}
            fullWidth
            multiline
          />
        </Box>

        <Box mt={4}>
          <TextField
            variant="outlined"
            select
            label="艦隊編成"
            value={type}
            onChange={handler.onFleetTypeChange}
            fullWidth
          >
            {FleetTypeOptions.map((v) => (
              <MenuItem key={v.value} value={v.value}>
                {v.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onEnd}>キャンセル</Button>
        <Button
          variant="outlined"
          disabled={isValidInfo}
          onClick={handler.onSubmit}
        >
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};
