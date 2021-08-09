import { Box } from "@material-ui/core";
import { FC } from "react";
import { ExternalLink } from "../common/ExternalLink";

export const Intro: FC = () => {
  return (
    <section>
      <h1>{process.env.APP_NAME}</h1>

      <Box display="flex" gridColumnGap={8} flexWrap="wrap">
        <ExternalLink
          href={`https://github.com/canoypa/kcm2cale/releases/tag/v${process.env.APP_VERSION}`}
        >
          <img
            src={`https://img.shields.io/badge/Release-v${process.env.APP_VERSION}-blue`}
          />
        </ExternalLink>
        <ExternalLink href="https://github.com/canoypa/kcm2cale">
          <img src="https://img.shields.io/badge/GitHub-canoypa/kcm2cale-blue?logo=github" />
        </ExternalLink>

        <ExternalLink href="https://twitter.com/canoypa">
          <img src="https://img.shields.io/badge/Twitter-@canoypa-blue?logo=twitter&logoColor=fff" />
        </ExternalLink>
      </Box>
      <p>
        {process.env.APP_NAME}{" "}
        は、ゲーム「艦隊これくしょん」向けの編成管理ツールです。
      </p>
    </section>
  );
};
