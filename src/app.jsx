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
  }

  render() {
    return (
      <div>
        <Add />
        <List items={this.state.items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));