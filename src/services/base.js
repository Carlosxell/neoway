import axios from 'axios';

const BaseService = axios.create({
  baseURL: 'http://servicodados.ibge.gov.br/api/v3',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

BaseService.interceptors.request.use((config) => {
  let request = { ...config };
  request.params = config?.params ? request.params = { ...config.params, apiKey: import.meta.env.VITE_API_KEY } : { apiKey: import.meta.env.VITE_API_KEY };
  return request;
});

BaseService.interceptors.response.use(
  function (response) { return response.data },
  function (error) {
    // TODO: Do proper error handling here (logout user, etc)
    console.error(error, 'ERROR');
  }
);

export default BaseService;
