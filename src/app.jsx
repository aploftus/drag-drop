import React from 'react';
import ReactDOM from 'react-dom';
import Reorder, {
  reorder,
  reorderImmutable,
  reorderFromTo,
  reorderFromToImmutable
} from 'react-reorder';

import './main.css';

import Add from './components/add.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['x', '2x', '3x'],
    };

    this.makeNewDiv = this.makeNewDiv.bind(this);
    this.onReorder = this.onReorder.bind(this);
  }

  makeNewDiv() {
    this.setState( {items: this.state.items.concat('')} );
  }

  onReorder (event, previousIndex, nextIndex, fromId, toId) {
    this.setState({
      items: reorder(this.state.items, previousIndex, nextIndex)
    });
  }

  render() {
    return (
      <div>
        <Add makeNewDiv={this.makeNewDiv} />
        <Reorder
          reorderId="div-list" // Unique ID that is used internally to track this list (required)
          placeholderClassName="placeholder" // Class name to be applied to placeholder elements (optional), defaults to 'placeholder'
          draggedClassName="dragged" // Class name to be applied to dragged elements (optional), defaults to 'dragged'
          lock="horizontal" // Lock the dragging direction (optional): vertical, horizontal (do not use with groups)
          onReorder={this.onReorder} // Callback when an item is dropped (you will need this to update your state)
          placeholder={
            <div className="custom-placeholder" /> // Custom placeholder element (optional), defaults to clone of dragged element
          }
        >
          {this.state.items.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="reorder">
                  <span className="index">{index + 1}</span>
                </div>
                <span>{item}</span>
                <span className="remove">x</span>
              </div>
            );
          }
          )}
        </Reorder>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));