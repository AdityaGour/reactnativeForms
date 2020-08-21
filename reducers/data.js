import {GET_DATA} from '../constant';

let initialState = {
  todoDatas: [],
  
};

const todoData = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {...state, todoDatas: action.token};
    default:
      return state;
  }
};

export default todoData;
