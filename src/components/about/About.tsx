import { FC } from "react";
import { ExternalLink } from "../common/ExternalLink";

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
            <ExternalLink href="https://wikiwiki.jp/kancolle/">
              艦隊これくしょん -艦これ- 攻略 Wiki*
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://kancolle.fandom.com/wiki/KanColle_Wiki">
              KanColle Wiki | Fandom
            </ExternalLink>
          </li>
        </ul>
      </div>
    </section>
  );
};
