import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="item">
        <div className="reorder">
          <span className="index">{this.props.index}</span>
          <span className="toggle"></span>
        </div>
        <span>{this.props.item}</span>
        <span className="remove">x</span>
      </div>
    );
  }
}