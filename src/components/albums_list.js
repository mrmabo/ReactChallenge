import React, { Component } from 'react';
import { connect } from 'react-redux';

class AlbumsList extends Component {

  render(){
    const { props }  = this;
    if(props.list.length == 0) {
      return <div> empty </div>
    }
    const AlbumsItem = props.list.map((item) => {
      return (
        <div className="item" key={item.trackId}>
          <div className="item-header">
            <img className="media-object" src={item.artworkUrl100}/>
          </div>
          <div className="item-content">
            <span>
              {item.trackCensoredName}
            </span>
            
          </div>
        </div>
      )
    })
    return (
      <div className="masonry">
        {AlbumsItem}
      </div>
    )
  }
} 
const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps)(AlbumsList);