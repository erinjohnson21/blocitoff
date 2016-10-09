import React from 'react';

const List = React.createClass({
  render() {
    return (
      <div className="todoListMain-container">
        <div className="header">
          <h1>Things to Do</h1>
          <form>
            <input className="task" placeholder="Enter Task"></input><br/>
            <button type="submit">Add Task</button>
            <a className="link" href="#">Completed Tasks</a>
            <a className="link" href="#">Expired Tasks</a>
          </form>

        </div>
      </div>
    );
  }
});

export default List;
