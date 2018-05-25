import React from 'react';

export default class Item extends React.Component {

  subtitle (content) {
    return (
      <p>{content}</p>
    )
  }

  render () {
    return (
      <p> {this.subtitle("Top 10 news")} {this.props.content}</p>
    )
  }
}