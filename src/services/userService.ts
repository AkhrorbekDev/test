// src/services/userService.js
import { api } from './api'

export const createUserService = () => {
  const authApi = api
  return {
    // Get user details
    getUserDetails: () => authApi('/users/me'),

    // Generate API key
    generateApiKey: () => authApi('/generate-api-key/'),

    // Get referral stats
    updateUserDetails: (data) => authApi('/users/me', {
      method: 'PATCH',
      body: data
    }),

    deleteUser: () => authApi('/users/me', {
      method: 'DELETE'
    }),

    getUSerById: (userId) => authApi(`/users/${userId}`),

    updateAvatar: (data) => authApi('/users/me/avatar', {
      method: 'PATCH',
      body: data
    }),

    getNotifications: () => authApi('/users/me/notifications'),
  }
}
