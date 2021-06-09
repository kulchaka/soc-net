import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '1959b0a8-82db-4788-8377-a222c6f69ee2'
  }
})

export const usersAPI = {
  loginUser() {
    return instance.get('auth/me')
      .then(response => response.data)
  },
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data)
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data)
  }
}
