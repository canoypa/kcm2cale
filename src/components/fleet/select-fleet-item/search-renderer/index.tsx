import { FC } from "react";
import { Filter } from "../filter";
import { SearchBox } from "./search-box";
import * as styles from "./styles";

type Props = {
  filterGroup: {
    id: string;
    title: string;
    filters: Array<{ value: number; label: string }>;
  };

  changeFilter: (value: string | null) => void;
  changeQuery: (value: string) => void;
};
export const OrganizeSelectSearchRenderer: FC<Props> = ({
  filterGroup,
  changeFilter,
  changeQuery,
}) => {
  const handlerChangeFilter = (value: string | null) => changeFilter(value);
  const handlerChangeQuery = (value: string) => changeQuery(value);

  return (
    <div className={styles.organizeSelectSearchRenderer}>
      <div className={styles.wrapper}>
        <div className={styles.filterArea}>
          <Filter items={filterGroup} onFilterChange={handlerChangeFilter} />
        </div>
        {/* search box here... */}
        <SearchBox onSubmit={handlerChangeQuery} />
      </div>
    </div>
  );
};
