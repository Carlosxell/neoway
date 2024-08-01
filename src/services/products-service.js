import BaseService from './base';

export default {
  fetchTopHeadlines(params) {
    return BaseService.get('/produtos', params);
  }
}
