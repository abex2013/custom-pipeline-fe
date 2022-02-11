export interface TableInfo {
  status: string
  data: Daum[]
}

export interface Daum {
  tableName: string
  numRows: number
}
