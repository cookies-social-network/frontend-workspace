import { AxiosRequestConfig } from 'axios'

import { AxiosService } from '#shared/plugins'

import { LoginPayloadType, LoginResponseType, RegisterPayloadType } from "../types";

class GuestApi extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  login = async (payload: LoginPayloadType) => {
    return await this.axiosCall<LoginResponseType>({
      url: '/api/v1/auth/login',
      method: 'post',
      data: payload,
    })
  }

  register = async (payload: RegisterPayloadType) => {
    return await this.axiosCall({
      url: '/api/v1/auth/register',
      method: 'post',
      data: payload,
    })
  }
}

export const guestApi = new GuestApi()
