import { Reducer, useCallback, useReducer } from "react";
import { SearchEquipRequest } from "~/core/search/equip";
import { EquipTypeValues } from "~/models/equip/types";

type SearchQuery = {
  query: SearchEquipRequest;
  setQuery: (q: string) => void;
  setTypes: (types: EquipTypeValues[] | null) => void;
};

type State = SearchEquipRequest;
type Actions =
  | { type: "Query"; value: string }
  | { type: "Types"; value: EquipTypeValues[] | null };
const searchQueryReducer: Reducer<State, Actions> = (state, action) => {
  if (action.type === "Query") {
    return { ...state, q: action.value || undefined };
  }

  if (action.type === "Types") {
    const { type: _, ...otherState } = state;

    if (action.value?.length) return { ...state, type: action.value };
    return otherState;
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
    (types: EquipTypeValues[] | null) =>
      dispatchQuery({ type: "Types", value: types }),
    []
  );

  return {
    query,
    setQuery,
    setTypes,
  };
};
