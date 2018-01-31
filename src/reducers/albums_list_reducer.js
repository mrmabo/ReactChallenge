import {
  FETCH_ARTIST_LIST
} from '../actions/type';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTIST_LIST:
      return action.payload;
    default:
      return state
  }
}