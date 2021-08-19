import { Reducer, useCallback, useReducer } from "react";
import { SearchShipRequest } from "../../../../core/search/ship";
import { ShipTypeValues } from "../../../../models/ship";

type SearchQuery = {
  query: SearchShipRequest;
  setQuery: (q: string) => void;
  setTypes: (types: ShipTypeValues[] | null) => void;
};

type State = SearchShipRequest;
type Actions =
  | { type: "Query"; value: string }
  | { type: "Types"; value: ShipTypeValues[] | null };
const searchQueryReducer: Reducer<State, Actions> = (state, action) => {
  if (action.type === "Query") {
    return { ...state, q: action.value || undefined };
  }

  if (action.type === "Types") {
    const { type: _, ...otherStates } = state;

    if (action.value?.length) return { ...state, type: action.value };
    return otherStates;
  }

  return state;
};

export const useSearchQuery = (): SearchQuery => {
  const [query, dispatchQuery] = useReducer(searchQueryReducer, {});

  const setQuery = useCallback(
    (q: string) => dispatchQuery({ type: "Query", value: q }),
    []
  );

  const setTypes = useCallback(
    (types: ShipTypeValues[] | null) =>
      dispatchQuery({ type: "Types", value: types }),
    []
  );

  return {
    query,
    setQuery,
    setTypes,
  };
};
