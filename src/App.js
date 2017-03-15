
import React from 'react';
import firebase from 'firebase';
import './App.css';
import SignIn from './SignIn';
import List from './List';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCCqXrGQJfbECB3oM5HREOYKwL44NhFm-8",
  authDomain: "todo-c4290.firebaseapp.com",
  databaseURL: "https://todo-c4290.firebaseio.com",
  storageBucket: "todo-c4290.appspot.com",
  messagingSenderId: "213946233863"
};
firebase.initializeApp(config);

const App = React.createClass({

  componentWillMount() {
    var self = this;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        window.user = user;
        self.setState({
          user: user,
          todosRef: firebase.database().ref('todos/' + user.uid),
        });
      } else {
        self.setState({
          user: null,
          todosRef: firebase.database().ref('todos'),
        });
      }
    });
    this.rootRef = firebase;
  },

  render() {
    var user = this.rootRef.auth().currentUser;
    return !user ? <SignIn rootRef={this.rootRef} /> : (
      <div className="App">
        <List firebaseRef={this.state.todosRef} rootRef={this.rootRef} />
      </div>
    );
  }
})



export default App;
