import React, { Component } from 'react';

import SearchBar from './search_bar';
import AlbumsList from './albums_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <hr />
        <AlbumsList />
      </div>
    );
  }
}
