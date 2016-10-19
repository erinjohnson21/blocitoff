import React from 'react';
import TodoItems from './TodoItems';

var List = React.createClass({
  getInitialState: function () {
    return {
      items: []
    };
  },

  addItem: function (e) {
    var itemArray = this.state.items;

    itemArray.push({
      text: this.inputElement.value,
      key: Date.now()
    }
  );

    this.setState({items: itemArray});

    this.inputElement.value="";

    e.preventDefault();
  },

  render: function () {
    return (
      <div className="todoListMain">
        <div className="header">
          <h1>Things to Do</h1>
          <form onSubmit={this.addItem}>
            <input ref={(a) => this.inputElement = a}
              className="task" placeholder="Enter Task">
            </input><br/>
            <button type="submit">Add Task</button>
            <a className="link" href="#">Expired Tasks</a>
            <a className="link" href="#">Completed Tasks</a>
          </form>
        </div>
        <div>
          <TodoItems entries={this.state.items}/>
        </div>
      </div>
    );
  }
});

export default List;
