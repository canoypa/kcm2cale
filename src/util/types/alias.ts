export type Falsy = false | null | undefined | '' | 0

type RewriteProp<O, T> = { [P in keyof O]: T }
// Todo: ネーミング!!!!!!!!!
type _RequireOne<O, K extends keyof O> = RewriteProp<
  Partial<Omit<O, K>>,
  never
> &
  Pick<O, K>
export type RequireOne<T, K = keyof T> = K extends keyof T
  ? _RequireOne<T, K>
  : never

export type EnumKeys<T> = keyof T
export type EnumValues<T> = T[keyof T]
