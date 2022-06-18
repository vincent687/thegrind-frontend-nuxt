import axios from 'axios'

const service = axios.create({
  // 请求地址，为空则请求的时候带上
  baseURL: 'https://thegrind-backend-5x42fcw6uq-df.a.run.app',
  // 请求超时时间
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('user-token')

    if (token) {
      config.headers['Authorization'] = `Bearer ${token.replaceAll('"', '')}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use( 

    //successful callback, we don't need to do anything
    (response) => {
      return response
    }, 
  
    //check if we received a 404 and redirect
    (error) => {
      if (error.response.status === 404) {
        debugger
        error.response
      } else {
        debugger
        return error.response
      }
    }
  )


export {
  service as axios
}

