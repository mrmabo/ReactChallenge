import { expect } from '../test_helper';
import AlibumsListReducer from '../../src/reducers/albums_list_reducer';
import { FETCH_ARTIST_LIST } from '../../src/actions/type';
import { albums_list_data } from '../test_data';

describe('AlibumsList Reducer', () => {
  it('handles action with unknown type', () => {
    expect(AlibumsListReducer(undefined, {})).to.eql([]);
  })

  it('handles action of type FETCH_ARTIST_LIST', () => {
    const action = {type: FETCH_ARTIST_LIST, payload: albums_list_data};
    expect(AlibumsListReducer([], action)).to.eql(albums_list_data);
  })
})