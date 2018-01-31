import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class SearchBar extends Component{

  constructor(props) {
    super(props);
    this.state = { term : ''}
  }

  handleClick(){
    const { term } = this.state;
    this.props.searchArtist(term);
  }

  render(){
    return (
      <div className="row search-bar">
        <div className="col-lg-6">
          <div className="input-group">
            <input 
              value={this.state.term}
              onChange={event => this.setState({term: event.target.value})}
              type="text" 
              className="form-control" 
              placeholder="Search for..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button" onClick={this.handleClick.bind(this)}>Go!</button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(null, actions)(SearchBar);