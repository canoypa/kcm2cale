import { FC } from "react";
import { TextLink } from "../common/TextLink";

export const PrivacyAndTerms: FC = () => {
  return (
    <section>
      <p>最終更新: 2021/05/25</p>

      <section>
        <h3>Google Analytics</h3>
        <p>
          このサイトでは、アクセス解析のため Google Analytics を使用しています。
        </p>
        <p>
          Cookie
          を使用して特定の情報が送信されますが、個人を特定するものではありません。
        </p>
        <p>データの収集, 処理について、詳しくは以下のページをご覧ください。</p>
        <p>
          <TextLink
            href="https://policies.google.com/technologies/partner-sites"
            ext
            newTab
          >
            Google のサービスを使用するサイトやアプリから収集した情報の Google
            による使用
          </TextLink>
        </p>
      </section>

      <section>
        <h3>免責事項</h3>
        <p>このサイトの利用は自己責任とし、一切の責任を負いません。</p>
      </section>
    </section>
  );
};
