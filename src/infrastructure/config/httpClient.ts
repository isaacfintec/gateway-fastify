const axios = require('axios')

export const BASE_URLs = {
  qa: 'https://148.250.10.42:50996',
  prod: 'https://148.250.128.19:50996'
}

const getHttpClient = (env) => {
  const baseURL = BASE_URLs[env] || BASE_URLs.qa // Url del gateway que utiliza la vpn para comunicarse con CECOBAN
  console.log({ baseURL })
  return axios.create({
    baseURL, 
    timeout: 10000
  })
}

// httpClient.interceptors.request.use(
//   function (config) {
//     if (config.method === 'post') {
//       config.data = {
//         ...config.data,
//         Encabezado: {
//           // 'CCB' identificador de quien consume el servicion, proporcionado por CECOBAN
//           InstitucionId: '', // TODO: get CECOBAN_INSTITUTION_ID
//           // Folio para uso interno del cliente ejemplo '126309159917927799'
//           FolioCliente: '', // TODO: generate a FolioCliente
//           // Identificaro único para la petición [A-Z0-9]{18}
//           SolicitudId: '', // TODO: generate a unique request id
//           TipoProceso: 'TP001' // Siempre 'TP001'
//         }
//       }
//     }

//     return config
//   },
//   error => Promise.reject(error)
// )

export default getHttpClient
