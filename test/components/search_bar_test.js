import { renderComponent, expect } from '../test_helper';
import SearchBar from '../../src/components/search_bar';

describe('Search Bar Test', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SearchBar);
  });

  it('has text input', ()=> {
    expect(component.find('input')).to.exist;
  })

  it('has button', () => {
    expect(component.find('button')).to.exist;
  })

  describe('entering some text', () => {

    beforeEach(() => {
      component.find('input').simulate('change', 'new artist');
    })

    it('shows that text in the text input', () => {
      expect(component.find('input')).to.have.value('new artist');
    })
  
  })
})