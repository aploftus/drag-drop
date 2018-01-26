import React from 'react';
import ReactDOM from 'react-dom';

import add from '../img/add.png';

export default class Add extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="add">
        <input type="image" id="add-btn" alt="add a new div" src={add}
          onClick={(e) => this.props.makeNewDiv()}
        />
      </div>
    );
  }
}
