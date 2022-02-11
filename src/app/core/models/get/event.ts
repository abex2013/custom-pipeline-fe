export interface Event {
  status: string
  data: Daum[]
}

export interface Daum {
  active: boolean
  _id: string
  storageAccount: string
  __v: number
}
