import { Reducer, useCallback, useReducer } from "react";
import { SearchEquipmentRequest } from "~/core/search/equipment";
import { EquipmentTypeValues } from "~/models/equipment/types";

type SearchQuery = {
  query: SearchEquipmentRequest;
  setQuery: (q: string) => void;
  setTypes: (types: EquipmentTypeValues[] | null) => void;
};

type State = SearchEquipmentRequest;
type Actions =
  | { type: "Query"; value: string }
  | { type: "Types"; value: EquipmentTypeValues[] | null };
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
    (types: EquipmentTypeValues[] | null) =>
      dispatchQuery({ type: "Types", value: types }),
    []
  );

  return {
    query,
    setQuery,
    setTypes,
  };
};
