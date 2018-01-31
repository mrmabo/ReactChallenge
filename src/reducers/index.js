import { combineReducers } from 'redux';

import albumsListReducer from './albums_list_reducer';

const rootReducer = combineReducers({
  list: albumsListReducer
});

export default rootReducer;
