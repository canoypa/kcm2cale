import { Box } from "@material-ui/core";
import { ChangeEventHandler, FC, useState } from "react";
import { searchFleet } from "../../../core/search/fleet";
import { Fleet } from "../../../models/fleet";
import { SearchBox } from "../../common/search-box";
import { FleetCard } from "../fleet-card";
import { useStyles } from "./styles";

type Props = {
  fleetList: Fleet[];
};
export const FleetList: FC<Props> = ({ fleetList }) => {
  const [query, setQuery] = useState<string>("");

  const classes = useStyles();

  const searchedFleetList = searchFleet(fleetList, { q: query });

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

      <Box display="grid" rowGap={2}>
        {searchedFleetList.map((v) => (
          <FleetCard key={v.id} fleetData={v} />
        ))}
      </Box>
    </div>
  );
};
