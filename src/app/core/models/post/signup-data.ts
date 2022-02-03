export interface SignupData {
  status: string
  token: string
  data: Data
}

export interface Data {
  user: User
}

export interface User {
  role: string
  _id: string
  name: string
  email: string
  __v: number
}
