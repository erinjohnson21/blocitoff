import React from 'react';

var TodoItems = React.createClass({
  toggleComplete: function(item) {
    var firebaseRef = this.props.firebaseRef;
    firebaseRef.child('/'+ item['.key']).update({completed: !item.completed});
  },
  render: function() {
    var self = this;
    var todoEntries = this.props.entries;

    function createTasks(item) {
      return <li
        key={item.key}
        onClick={self.toggleComplete.bind(null, item)}
        style={{textDecoration: item.completed ? 'line-through' : 'none'}}>
          {item.text}
        </li>;
    }

    var listItems = todoEntries.map(createTasks);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
});


export default TodoItems;
