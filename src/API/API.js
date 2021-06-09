import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '1959b0a8-82db-4788-8377-a222c6f69ee2'
  }
})

export const usersAPI = {}

export const getUserAPI = (currentPage, pageSize) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
}
