import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import Add from './components/add.jsx';
import List from './components/list.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['x', '2x', '3x'],
      selectedIndex: null
    };

    this.makeNewDiv = this.makeNewDiv.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  makeNewDiv() {
    this.setState( {items: this.state.items.concat('')} );
  }

  selectItem(index) {
    this.setState({ selectedIndex: index });
  }

  render() {
    return (
      <div>
        <Add makeNewDiv={this.makeNewDiv} />
        <List items={this.state.items} selectedIndex={this.state.selectedIndex} selectItem={this.selectItem} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));