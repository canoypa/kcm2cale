import { Box } from "@mui/material";
import { FC } from "react";
import { APP_NAME, APP_VERSION } from "~/core/env";
import { TextLink } from "../common/TextLink";

export const About: FC = () => {
  return (
    <section>
      <section>
        <Box display="flex" columnGap={1} flexWrap="wrap">
          <TextLink
            href={`https://github.com/canoypa/kcm2cale/releases/tag/v${APP_VERSION}`}
            ext
            newTab
          >
            <img
            alt={`Release ${APP_VERSION}`}
              src={`https://img.shields.io/badge/Release-v${APP_VERSION}-blue`}
            />
          </TextLink>
          <TextLink href="https://github.com/canoypa/kcm2cale" ext newTab>
            <img  alt="アプリの GitHub リポジトリ" src="https://img.shields.io/badge/GitHub-canoypa/kcm2cale-blue?logo=github" />
          </TextLink>

          <TextLink href="https://twitter.com/canoypa" ext newTab>
            <img alt="開発者の Twitter" src="https://img.shields.io/badge/Twitter-@canoypa-blue?logo=twitter&logoColor=fff" />
          </TextLink>
        </Box>
        <p>
          {APP_NAME} は、ゲーム「艦隊これくしょん」向けの編成管理ツールです。
        </p>
      </section>

      <section>
        <h3>このサイトについて</h3>

        <div>
          <p>
            開発中につき、変な動きをしたり、突然大幅な変更が加えられたりするかもしれません。
          </p>
        </div>

        <div>
          <p>使用するデータは以下のサイトに基づいています。</p>
          <ul>
            <li>
              <TextLink href="https://wikiwiki.jp/kancolle/" ext newTab>
                艦隊これくしょん -艦これ- 攻略 Wiki*
              </TextLink>
            </li>
            <li>
              <TextLink
                href="https://kancolle.fandom.com/wiki/KanColle_Wiki"
                ext
                newTab
              >
                KanColle Wiki | Fandom
              </TextLink>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};
