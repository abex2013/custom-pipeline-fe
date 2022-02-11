export interface Source {
  status: string
  data: Data
}

export interface Data {
  data: Daum[]
}

export interface Daum {
  _id: string
  storageAccount: string
  containerName: string
  accessKey: string
  userId: string
  __v: number
}
