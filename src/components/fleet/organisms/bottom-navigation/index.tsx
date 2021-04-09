import { FC } from "react";
import { useHistory } from "react-router";
import {
  BottomNavigation as MDCBottomNavigation,
  BottomNavigationItem as MDCBottomNavigationItem,
} from "../../../common/bottom-navigation";
import { MaterialIcon } from "../../../common/icons";

// Fixme
const IconFlagOutlined: FC = () => <MaterialIcon icon="flag" />;
const IconBarChartOutlined: FC = () => <MaterialIcon icon="bar_chart" />;
const IconNavigationOutlined: FC = () => <MaterialIcon icon="navigation" />;

type Props = {
  basePath: string;
};
export const BottomNavigation: FC<Props> = ({ basePath }) => {
  const history = useHistory();

  const onSelect = (path: string) => {
    if (path !== location.pathname) history.push(path);
  };

  return (
    <MDCBottomNavigation onSelect={onSelect}>
      <MDCBottomNavigationItem
        icon={IconFlagOutlined}
        value={`${basePath}`}
        label="編成"
      />
      <MDCBottomNavigationItem
        icon={IconBarChartOutlined}
        value={`${basePath}/details`}
        label="詳細"
      />
      <MDCBottomNavigationItem
        icon={IconNavigationOutlined}
        value={`${basePath}/map`}
        label="マップ"
      />
    </MDCBottomNavigation>
  );
};
