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

    this.props.firebaseRef.push({
      text: this.inputElement.value,
      key: Date.now(),
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
  logout: function() {
    this.props.rootRef.auth().signOut();
  },

  render: function () {
    return (
      <div>
      <button className="logout btn" onClick={this.logout}>Logout</button>
      <div className="todoListMain">
        <div className="header">
          <h1>Things to Do</h1>
          <form onSubmit={this.addItem}>
            <input ref={(a) => this.inputElement = a}
              className="task" placeholder="Enter Task">
            </input><br/>
            <button type="submit" className="btn">Add Task</button>
            <a className="link" href="#" onClick={() => this.setState({show: 'all'})}>All</a>
            <a className="link" href="#" onClick={() => this.setState({show: 'expired'})}>Expired Tasks</a>
            <a className="link" href="#" onClick={() => this.setState({show: 'completed'})}>Completed Tasks</a>
          </form>
        </div>
        <div>
          <TodoItems entries={this.getItems()} firebaseRef={this.props.firebaseRef} />
        </div>
      </div>
      </div>
    );
  }
});

export default List;
