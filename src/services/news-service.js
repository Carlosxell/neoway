import BaseService from './base';

export default {
  fetchNews(params) {
    return BaseService.get('/noticias', { params });
  }
}
