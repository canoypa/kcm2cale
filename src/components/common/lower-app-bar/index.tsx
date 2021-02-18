import { FC } from "react";
import {
  TopAppBar,
  TopAppBarIcon,
  TopAppBarSection,
  TopAppBarTitle,
} from "../app-bar";
import { IconButton } from "../button";
import { IconArrowBack } from "../icons";

type Props = {
  title?: string;
  onNavClick: () => void;
};
export const LowerAppBar: FC<Props> = ({ title, onNavClick }) => (
  <TopAppBar>
    <TopAppBarSection align="start">
      <TopAppBarIcon>
        <IconButton icon={<IconArrowBack />} onClick={onNavClick} />
      </TopAppBarIcon>
      {title && <TopAppBarTitle>{title}</TopAppBarTitle>}
    </TopAppBarSection>
  </TopAppBar>
);
