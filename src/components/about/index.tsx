import { Box } from "@material-ui/core";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { useDidMount } from "../../util/hooks/lifecycle";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { useStyles } from "./styles";

interface ExternalLink {
  href: string;
  children: ReactNode;
}
const ExternalLink: FC<ExternalLink> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export const About: FC = () => {
  const pageViewLog = usePageViewLog();
  const setPageTitle = useSetPageTitle();

  const classes = useStyles();

  useDidMount(() => {
    setPageTitle("About");
    pageViewLog("About");
  });

  return (
    <div className={classes.root}>
      <header>
        <Link to="/">トップページへ</Link>
      </header>

      <main>
        <section>
          <h1>{__APP_NAME__}</h1>

          <Box display="flex" gridColumnGap={8} flexWrap="wrap">
            <ExternalLink
              href={`https://github.com/canoypa/kcm2cale/releases/tag/v${__APP_VERSION__}`}
            >
              <img
                src={`https://img.shields.io/badge/release-v${__APP_VERSION__}-blue`}
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
            {__APP_NAME__}{" "}
            は、ゲーム「艦隊これくしょん」向けの編成管理ツールです。
          </p>
        </section>

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

        <section>
          <h2>FAQ</h2>

          <section>
            <h3>何ができますか？</h3>
            <p>今の所最低限の編成機能しかありません。</p>
            <p>じわじわ開発します :/</p>
          </section>

          <section>
            <h3>編成は共有できますか？</h3>
            <p>現時点では出来ません。</p>
            <p>
              URL
              を見る限り共有できそうですが、編成のデータは端末に保存され他の人が見ることは出来ません。
            </p>
          </section>
        </section>

        <section>
          <h2>プライバシーと規約</h2>
          <p>最終更新: 2021/05/25</p>

          <section>
            <h3>Google Analytics</h3>
            <p>
              このサイトでは、アクセス解析のため Google Analytics
              を使用しています。
            </p>
            <p>
              Cookie
              を使用して特定の情報が送信されますが、個人を特定するものではありません。
            </p>
            <p>
              データの収集, 処理について、詳しくは以下のページをご覧ください。
            </p>
            <p>
              <ExternalLink href="https://policies.google.com/technologies/partner-sites">
                Google のサービスを使用するサイトやアプリから収集した情報の
                Google による使用
              </ExternalLink>
            </p>
          </section>

          <section>
            <h3>免責事項</h3>
            <p>このサイトの利用は自己責任とし、一切の責任を負いません。</p>
          </section>
        </section>
      </main>
    </div>
  );
};

export default About;
