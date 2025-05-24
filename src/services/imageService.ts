// src/services/userService.js
import { api } from './api'

export const createImageService = () => {
  const authApi = api
  return {
    // Get user details
    uploadImage: (data) => authApi('/upload/image', {
      method: 'POST',
      body: data
    }),
  }
}
