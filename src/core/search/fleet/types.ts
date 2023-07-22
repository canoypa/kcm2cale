/** 検索クエリ */
export type SearchFleetQuery = string

export type SearchFleetRequest = Partial<{
  /** 検索クエリ */
  q: SearchFleetQuery
}>
