import React from 'react';
import item from './item';

export default class List extends React.Component{

  render () {
    return (
      <div>
        <h3>News</h3>
        {this.props.children}
      </div>
    )
  }
}