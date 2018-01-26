import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import Add from './components/add.jsx';
import List from './components/list.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['x', '2x', '3x']
    };

    this.makeNewDiv = this.makeNewDiv.bind(this);
  }

  makeNewDiv() {
    this.setState( {items: this.state.items.concat('')} );
  }

  render() {
    return (
      <div>
        <Add makeNewDiv={this.makeNewDiv} />
        <List items={this.state.items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));