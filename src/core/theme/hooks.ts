import { useRecoilValue } from "recoil";
import { ThemeState } from "../../store/general/theme";

export const useTheme = () => useRecoilValue(ThemeState);
