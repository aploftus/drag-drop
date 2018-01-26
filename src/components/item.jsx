import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="item">
        <span>{this.props.index}</span>
        <span>{this.props.item}</span>
      </div>
    );
  }
}

export default Item;