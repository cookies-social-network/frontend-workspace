import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { useCookies } from '../lib'

type FetchErrorType = Record<string, string[]>[]

export type ApiResponseType<T = unknown> = {
  data: T
  errors: FetchErrorType
  messages: string[]
}

export type ServiceResponseType<T = unknown> = Promise<
  [undefined, AxiosResponse<ApiResponseType<T>>] | [AxiosError<ApiResponseType>]
>

export class AxiosService {
  private axiosInstance!: AxiosInstance

  constructor(config?: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config)

    /** Request handler */
    this.axiosInstance.interceptors.request.use((config: any) => {
      const token = useCookies().getCookie('adminToken')

      config.headers = {
        ...(token ? { Authorization: 'Bearer ' + token } : {}),
        fingerprint: generateUserUUID(),
      }

      return config
    })

    /** Response handler */
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return Promise.resolve(response)
      },
      async (error: AxiosError) => {
        switch (error?.response?.status) {
          // Ошибка авторизации
          case 401: {
            break
          }

          // Ошибки прав доступа
          case 403: {
            break
          }

          // Ошибки наличия апи методов
          case 404: {
            break
          }

          // Ошибки валидации
          case 422: {
            break
          }

          // Ошибки сервера
          case 500: {
            break
          }

          default: {
            break
          }
        }

        return Promise.reject(error)
      }
    )
  }

  protected async axiosCall<T = any>(config: AxiosRequestConfig): ServiceResponseType<T> {
    try {
      const response = await this.axiosInstance.request<ApiResponseType<T>>(config)

      return [undefined, response]
    } catch (error) {
      return [error as AxiosError<ApiResponseType>]
    }
  }

  protected async fakeAxiosCall<T = unknown>(mockData: T): ServiceResponseType<T> {
    try {
      const response = await apiMethod<T>(mockData)

      return [undefined, response]
    } catch (error) {
      return [error as AxiosError<ApiResponseType>]
    }
  }
}

export const getBaseUrl = (): string => {
  return import.meta.env.DEV ? '/api' : `${import.meta.env.VITE_BASE_URL}/api`
}

const generateUserUUID = () => {
  const { setCookie, getCookie } = useCookies()

  if (!getCookie('token')) {
    setCookie('token', window.crypto.randomUUID())
  }

  return getCookie('token')
}

export const API_CONFIG: AxiosRequestConfig = {
  baseURL: getBaseUrl(),
  withCredentials: true,
}

const apiMethod = <T = unknown>(
  mockData: T,
  errorRandomRate = 4,
  random = 10
): Promise<AxiosResponse<ApiResponseType<T>>> => {
  return new Promise((res, rej) => {
    const ResponseStatus = Math.floor(Math.random() * random) + 1

    setTimeout(() => {
      console.log(`Запрос ${ResponseStatus}`)

      if (ResponseStatus > errorRandomRate) {
        const response = {
          data: {},
        } as AxiosResponse<ApiResponseType<T>>

        if (response) {
          response.status = 200

          response.data.data = mockData

          res(response)
        }
      } else {
        const error = {} as AxiosError<ApiResponseType>

        if (error) {
          error.status = 500

          error.response = {
            data: {
              errors: [
                {
                  message: ['message'],
                },
              ],
              messages: ['Message 1'],
              data: [],
            },
          } as AxiosResponse

          rej([error])
        }
      }
    }, 1500)
  })
}
