import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import * as styles from "./styles";

export const NotFound: FC = () => {
  usePageViewLog("Not Found");

  const setPageTitle = useSetPageTitle();
  const { pathname } = useLocation();

  setPageTitle("Page Not Found");

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.sad}>:(</div>
        <p className={styles.notFound}>404 Page Not Found</p>
        <p>リクエストされた URL {pathname} はこのサイトに存在しません</p>
        <p>
          <Link to="/">トップページへ</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
