import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        draggable="true"
        className={`item ${this.props.selected ? 'selected' : ''}`}
        onMouseDown={e => this.props.selectItem(this.props.index)}
        onMouseUp={e => this.props.selectItem(null)}
        onDragEnd={e => this.props.selectItem(null)}
      >
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