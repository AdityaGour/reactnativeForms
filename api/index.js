import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true,
  timeout: 5000,
});

const Get = async (url) => {
  return axiosInstance.get(url);
};

const ApiService = {Get};
export default ApiService;
