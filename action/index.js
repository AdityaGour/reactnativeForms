import ApiService from '../api';
import {GET_DATA} from '../constant';

export const getData = () => {
  return ApiService.Get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      return {
        type: GET_DATA,
        response,
      };
    })
    .catch((error) => ({error}));
};
