import { FC } from "react";
import { Link } from "react-router-dom";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import * as styles from "./styles";

interface ExternalLink {
  href: string;
  text: string;
}
const ExternalLink: FC<ExternalLink> = ({ href, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

export const About: FC = () => {
  usePageViewLog("About");

  const setPageTitle = useSetPageTitle();

  setPageTitle("About");

  return (
    <div className={styles.aboutContainer}>
      <header>
        <Link to="/">トップページへ</Link>
      </header>
      <div>
        <section>
          <h1>{__APP_NAME__}</h1>
          <p>{__APP_NAME__} は 「艦隊これくしょん」の編成保存ツールです。</p>
        </section>

        <section>
          <h2>このサイトについて</h2>

          <section>(β公開につき動作保証はいたしかねます。)</section>

          <section>
            <p>使用するデータは以下のサイトに基づいています。</p>
            <ul>
              <li>
                <ExternalLink
                  href="https://wikiwiki.jp/kancolle/"
                  text="艦隊これくしょん -艦これ- 攻略 Wiki*"
                />
              </li>
              <li>
                <ExternalLink
                  href="https://kancolle.fandom.com/wiki/KanColle_Wiki"
                  text="KanColle Wiki | Fandom"
                />
              </li>
            </ul>
          </section>
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
            <p>編成の共有機能は未実装です。</p>
            <p>
              いかにも共有できそうな URL
              も生成されますが、編成は端末に保存され他の人が見ることは出来ません。
            </p>
          </section>

          <section>
            <h3>どのブラウザに対応していますか？</h3>
            <p>
              次のブラウザの最新バージョンと、1つ前のバージョンに対応しているつもりです。
            </p>
            <ul>
              <li>
                <ExternalLink
                  href="https://www.google.com/chrome/"
                  text="Chrome"
                />
              </li>
              <li>
                <ExternalLink
                  href="https://www.mozilla.org/firefox/new/"
                  text="Firefox"
                />
              </li>
              <li>
                <ExternalLink
                  href="https://www.microsoft.com/edge/"
                  text="Edge"
                />
              </li>
              <li>
                <ExternalLink
                  href="https://www.apple.com/safari/"
                  text="Safari"
                />
              </li>
            </ul>
          </section>
        </section>

        <section>
          <h2>プライバシーと規約</h2>
          <p>
            このサイトでは、アクセス解析のため Google Analytics
            を使用しています。
          </p>
          <p>
            Cookie
            を使用して特定の情報が送信されますが、個人を特定するものではありません。
          </p>
          <p>
            データが収集、処理される仕組みについて、詳しくは以下のページをご覧ください
          </p>
          <p>
            <ExternalLink
              href="https://policies.google.com/technologies/partner-sites"
              text="Google のサービスを使用するサイトやアプリから収集した情報の Google による使用"
            />
          </p>
        </section>

        <section>
          <h2>連絡先</h2>
          <p>
            <ExternalLink
              href="https://github.com/canoypa/kcm2cale"
              text="GitHub (canoypa/kcm2cale)"
            />
            <span> や </span>
            <ExternalLink
              href="https://twitter.com/canoypa"
              text="Twitter (@canoypa)"
            />
            <span> などに。</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
