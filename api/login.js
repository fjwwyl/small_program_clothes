import http from "../utils/request"


export const loginApi = (code) => {
  return http.get(`http://192.168.31.158/login?code=${code}`)
}