import { Box } from "@material-ui/core";
import { ChangeEventHandler, createContext, FC, useRef, useState } from "react";
import { searchFleet } from "../../../core/search/fleet";
import { useRefreshFleetList } from "../../../hooks/organize/fleet";
import { FireFleet } from "../../../models/fleet";
import { SearchBox } from "../../common/search-box";
import { FleetCard } from "../fleet-card";
import { useStyles } from "./styles";

export const FleetListContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  reloadFleet: () => {},
});

type Props = {
  fleetList: FireFleet[];
};
export const FleetList: FC<Props> = ({ fleetList }) => {
  const [query, setQuery] = useState<string>("");
  const reloadFleet = useRefreshFleetList();

  const classes = useStyles();

  const searchedFleetList = searchFleet(fleetList, { q: query });

  // 編成削除時のリロード用 context value
  const contextValue = useRef({ reloadFleet });

  const changeQuery: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <div className={classes.searchBoxArea}>
        <SearchBox
          fullWidth
          placeholder="編成を検索"
          value={query}
          onChange={changeQuery}
        />
      </div>

      <FleetListContext.Provider value={contextValue.current}>
        <Box display="grid" gridRowGap={16}>
          {searchedFleetList.map((v) => (
            <FleetCard key={v.id} fleetData={v} />
          ))}
        </Box>
      </FleetListContext.Provider>
    </div>
  );
};
