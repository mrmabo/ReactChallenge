import axios from 'axios';
import {
  FETCH_ARTIST_LIST
} from './type';

export function searchArtist(artist){

  const request = axios.get(`https://itunes.apple.com/search?term=${artist}`);
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: FETCH_ARTIST_LIST, payload: data.results})
    })
  }
}