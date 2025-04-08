import { api } from '@/services/api'


const newsService = () => {
  return {
    getNews: (query) => api('/common/news/', {
      method: 'GET',
      params: query,
    }),
    getNewsById: (newsId) => api(`/common/news/${newsId}`, {}),
  }
}

const filtersService = () => {
  return {
    getFilters: () => api('/common/filters/'),
  }
}



export {
  newsService,
  filtersService
}
