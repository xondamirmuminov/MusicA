import Axios from 'axios';
import {REACT_APP_API_URL} from '@env';
import {store} from '../store';
import {handleLoading} from '../store/auth';

const axios = Axios.create({
  baseURL: REACT_APP_API_URL,
  withCredentials: true,
  timeout: 20000,
});

axios.interceptors.request.use(configs => {
  store.dispatch(handleLoading(true));
  return configs;
});

axios.interceptors.response.use(
  res => {
    store.dispatch(handleLoading(false));
    return res;
  },
  error => {
    store.dispatch(handleLoading(false));
    return Promise.reject(error);
  },
);

Axios.interceptors.request.use(configs => {
  store.dispatch(handleLoading(true));
  return configs;
});

Axios.interceptors.response.use(
  res => {
    store.dispatch(handleLoading(false));
    return res;
  },
  error => {
    store.dispatch(handleLoading(false));
    return Promise.reject(error);
  },
);

export default axios;
