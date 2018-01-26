import React from 'react';

import Item from './item.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list">
        {this.props.items.map((item, index) => {
          return (
            <Item
              item={item}
              key={index}
              index={index}
            />
          );
        }
        )}
      </div>
    );
  }
}

export default List;