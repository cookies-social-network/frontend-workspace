import { AxiosRequestConfig } from 'axios'

import { AxiosService } from '../../../shared/plugins'

class UsersApi extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  getMe = async () => {
    return await this.axiosCall({
      url: '/api/v1/users/me',
      method: 'get',
    })
  }
}

export const usersApi = new UsersApi()
