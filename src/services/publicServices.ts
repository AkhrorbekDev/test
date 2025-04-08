import { api } from '@/services/api'


const newsService = () => {
  return {
    getNews: () => api('/common/news/'),
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
