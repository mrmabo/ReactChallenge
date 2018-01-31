import { renderComponent, expect } from '../test_helper';
import AlbumsList from '../../src/components/albums_list';
import { albums_list_data } from '../test_data';

describe('Albums List Test', () => {

  let component;

  beforeEach(() => {
    const props = {
      list: albums_list_data
    }
    component = renderComponent(AlbumsList, null, props);
  });

  it('shows an item for each comment', () => {
    expect(component.find('.item').length).to.equal(2);
  })

  it('shows each comment that is provided', () => {
    expect(component.find('.item-content span')).to.contain('Artist 1');
    expect(component.find('.item-content span')).to.contain('Artist 2');
  })

})