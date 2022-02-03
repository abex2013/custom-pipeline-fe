export interface ConnectionCredentials {
  status: string
  data: Data
}

export interface Data {
  _id: string
  userId: string
  storageAccount: string
  containerName: string
  accessKey: string
  accountidentifier: string
  user: string
  password: string
  database_name: string
  schema_name: string
  warehouse_name: string
  __v: number
}
