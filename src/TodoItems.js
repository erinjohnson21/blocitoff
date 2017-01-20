import React from 'react';

var TodoItems = React.createClass({
  render: function() {
    var todoEntries = this.props.entries;
    var firebaseRef = this.props.firebaseRef;

    function createTasks(item) {
      return <li key={item.key} onClick={() => firebaseRef.child('-K_zejp3DEbLqVBJd9Ih').update({completed: !!item.completed})}>{item.text}</li>
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
