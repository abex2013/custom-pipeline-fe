export interface Destination {
  status: string
  data: Data
}

export interface Data {
  data: Daum[]
}

export interface Daum {
  _id: string
  accountidentifier: string
  user: string
  password: string
  database_name: string
  schema_name: string
  warehouse_name: string
  userId: string
  __v: number
}
