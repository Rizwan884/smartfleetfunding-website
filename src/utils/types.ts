export type IJSON =
  | string
  | number
  | boolean
  | { [x: string]: IJSON }
  | Array<IJSON>
