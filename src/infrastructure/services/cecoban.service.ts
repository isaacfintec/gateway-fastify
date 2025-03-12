import { Axios } from 'axios'
// import getHttpClient from '../config/httpClient'
import https from 'https'

export const BASE_URLs = {
  qa: 'https://148.250.10.42:50996',
  prod: 'https://148.250.128.19:50996'
}

const options = {
  agent: new https.Agent({  
    rejectUnauthorized: false // Desactiva la validación del certificado
  })
}

export default class CecobanService {
  baseURL: string

  constructor(env) {
    this.baseURL = BASE_URLs[env]
  }

  async getCURP(params) {
    console.log({ params })
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)
    const signal = controller.signal

    const response = await fetch(`${this.baseURL}/SIVI.API/ObtenerCURP`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params),
      signal,
      ...options
    })
    clearTimeout(timeoutId)
    const result = await response.json()
    console.log({ result })
    // const response = await this.http.post('/SIVI.API/ObtenerCURP', params)
    return result
  }
}
