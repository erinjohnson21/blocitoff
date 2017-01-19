import React from 'react';
import ReactFireMixin from 'reactfire';
import TodoItems from './TodoItems';
import moment from 'moment';

var List = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {
      items: [],
      show: 'all',
    };
  },

  componentWillMount: function () {
    this.bindAsArray(this.props.firebaseRef.limitToLast(25), 'items');
  },

  addItem: function (e) {
    e.preventDefault();

    // var itemArray = this.state.items;

    this.props.firebaseRef.push({
      text: this.inputElement.value,
      key: Date.now()
    });

    this.inputElement.value="";
  },

  getItems: function () {
    if (this.state.show === 'expired') {
      return this.state.items.filter(function (item) {
        return moment(item.key).isBefore(moment().subtract(7, 'd'));
      });
    } else if (this.state.show === 'completed') {
      return this.state.items.filter(function (item) {
        return item.completed;
      });
    }
    return this.state.items;
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
            <a className="link" href="#" onClick={() => this.setState({show: 'all'})}>All</a>
            <a className="link" href="#" onClick={() => this.setState({show: 'expired'})}>Expired Tasks</a>
            <a className="link" href="#" onClick={() => this.setState({show: 'completed'})}>Completed Tasks</a>
          </form>
        </div>
        <div>
          <TodoItems entries={this.getItems()} firebaseRef={this.props.firebaseRef} />
        </div>
      </div>
    );
  }
});

export default List;
