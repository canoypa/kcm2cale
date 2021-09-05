import { zodResolver } from "@hookform/resolvers/zod";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { NavigateBefore } from "@material-ui/icons";
import { FC, useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { infer as zodInfer, nativeEnum, object, string } from "zod";
import { updateFleetDoc } from "~/api/fleet";
import { FleetIdContext } from "~/components/fleet/fleetIdContext";
import { useFleet } from "~/components/fleet/hooks";
import { FleetType } from "../../../../../models/fleet";

const TitleCharCount = 256;
const DescriptionCharCount = 512;

const FormInput = object({
  title: string().max(TitleCharCount, {
    message: `タイトルを ${TitleCharCount} 文字以上に設定できません。`,
  }),
  description: string().max(DescriptionCharCount, {
    message: `説明を ${DescriptionCharCount} 文字以上に設定できません。`,
  }),
  type: nativeEnum(FleetType),
});
type FormInput = zodInfer<typeof FormInput>;

type Props = {
  open: boolean;
  onEnd: () => void;
};
export const Editing: FC<Props> = ({ open, onEnd }) => {
  const {
    control,
    handleSubmit: submitWrap,
    reset,
    formState: { isValid, errors },
  } = useForm<FormInput>({
    mode: "onChange",
    resolver: zodResolver(FormInput),
  });

  const fleetId = useContext(FleetIdContext);
  const { data: fleet } = useFleet(fleetId);

  const theme = useTheme();
  const fullScreenBreakPoint = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = submitWrap((data) => {
    updateFleetDoc(fleetId, data);
    onEnd();
  });

  const handleClose = () => {
    reset({
      title: fleet?.title,
      description: fleet?.description,
      type: fleet?.type,
    });
    onEnd();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={fullScreenBreakPoint}
      fullWidth
    >
      <AppBar position="sticky" elevation={0} color="transparent">
        <Toolbar>
          {fullScreenBreakPoint && (
            <IconButton
              edge="start"
              onClick={onEnd}
              aria-label="戻る"
              sx={{ mr: 1 }}
            >
              <NavigateBefore />
            </IconButton>
          )}
          <Typography variant="h6">編成を編集</Typography>
        </Toolbar>
      </AppBar>

      <DialogContent>
        <form onSubmit={handleSubmit}>
          {/* support submit by enter */}
          <input type="submit" hidden />

          <Box mt={1}>
            <Controller
              name="title"
              control={control}
              defaultValue={fleet?.title}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  autoFocus
                  label="編成名"
                  error={errors.title !== undefined}
                  helperText={errors.title?.message}
                  {...field}
                />
              )}
            />
          </Box>

          <Box mt={2}>
            <Controller
              name="description"
              control={control}
              defaultValue={fleet?.description}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  multiline
                  label="説明"
                  error={errors.description !== undefined}
                  helperText={errors.description?.message}
                  {...field}
                />
              )}
            />
          </Box>

          <Box mt={4}>
            <Controller
              name="type"
              control={control}
              defaultValue={fleet?.type}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  select
                  fullWidth
                  label="艦隊編成"
                  {...field}
                >
                  <MenuItem value={FleetType.Normal}>通常艦隊</MenuItem>
                  <MenuItem value={FleetType.Carrier}>空母機動部隊</MenuItem>
                  <MenuItem value={FleetType.Surface}>水上打撃部隊</MenuItem>
                  <MenuItem value={FleetType.Transport}>輸送護衛部隊</MenuItem>
                  <MenuItem value={FleetType.Striking}>遊撃部隊</MenuItem>
                </TextField>
              )}
            />
          </Box>
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>キャンセル</Button>
        <Button variant="outlined" disabled={!isValid} onClick={handleSubmit}>
          保存する
        </Button>
      </DialogActions>
    </Dialog>
  );
};
