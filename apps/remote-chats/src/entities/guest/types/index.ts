export type GuestType = {
  name: string
}

export type LoginPayloadType = {
  login: string
  password: string
}

export type LoginResponseType = {
  access_token: string
}

export type RegisterPayloadType = {
  login: string
  email: string
  password: string
  name: string
}
