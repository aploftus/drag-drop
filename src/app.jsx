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
    this.updateInput = this.updateInput.bind(this);
  }

  makeNewDiv() {
    this.setState( {items: this.state.items.concat('')} );
  }

  removeDiv(index) {
    let {items} = this.state;
    if (items.length === 1) {
      this.setState({items: ['']});
    } else {
      items.splice(index, 1);
      this.setState({ items: items });
    }
  }

  onReorder(event, previousIndex, nextIndex, fromId, toId) {
    this.setState({
      items: reorder(this.state.items, previousIndex, nextIndex)
    });
  }

  updateInput(index, value) {
    let {items} = this.state;
    items[index] = value;
    this.setState({ items: items });
  }

  render() {
    return (
      <div>
        <Add makeNewDiv={this.makeNewDiv} />
        <Reorder
          reorderId="div-list"
          placeholderClassName="placeholder"
          holdTime={100}
          draggedClassName="dragged"
          onReorder={this.onReorder}
          placeholder={
            <div className="custom-placeholder" />
          }
        >
          {this.state.items.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="reorder">
                  <span className="index">{index + 1}</span>
                </div>
                <input type="text" value={item} onChange={e => this.updateInput(index, e.target.value)} />
                <span className="remove" onClick={e => this.removeDiv(index)}>x</span>
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