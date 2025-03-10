import { Axios } from 'axios'
import getHttpClient from '../config/httpClient'

export default class CecobanService {
  http: Axios

  constructor(env) {
    this.http = getHttpClient(env)
  }

  async getCURP(params) {
    console.log({ params })
    const response = await this.http.post('/SIVI.API/ObtenerCURP', params)
    return response
  }
}
