import { FC } from "react";
import { TextLink } from "../common/TextLink";

export const About: FC = () => {
  return (
    <section>
      <h2>このサイトについて</h2>

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
  );
};
