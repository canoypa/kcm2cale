import { Box } from "@material-ui/core";
import { FC } from "react";
import { APP_NAME, APP_VERSION } from "../../core/env";
import { TextLink } from "../common/TextLink";

export const Intro: FC = () => {
  return (
    <section>
      <h1>{APP_NAME}</h1>

      <Box display="flex" columnGap={1} flexWrap="wrap">
        <TextLink
          href={`https://github.com/canoypa/kcm2cale/releases/tag/v${APP_VERSION}`}
          ext
          newTab
        >
          <img
            src={`https://img.shields.io/badge/Release-v${APP_VERSION}-blue`}
          />
        </TextLink>
        <TextLink href="https://github.com/canoypa/kcm2cale" ext newTab>
          <img src="https://img.shields.io/badge/GitHub-canoypa/kcm2cale-blue?logo=github" />
        </TextLink>

        <TextLink href="https://twitter.com/canoypa" ext newTab>
          <img src="https://img.shields.io/badge/Twitter-@canoypa-blue?logo=twitter&logoColor=fff" />
        </TextLink>
      </Box>
      <p>{APP_NAME} は、ゲーム「艦隊これくしょん」向けの編成管理ツールです。</p>
    </section>
  );
};
