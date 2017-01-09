
import React, { Component } from 'react';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import './App.css';
import List from './List';
// import SignIn from './SignIn';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCCqXrGQJfbECB3oM5HREOYKwL44NhFm-8",
    authDomain: "todo-c4290.firebaseapp.com",
    databaseURL: "https://todo-c4290.firebaseio.com",
    storageBucket: "todo-c4290.appspot.com",
    messagingSenderId: "213946233863"
  };
  firebase.initializeApp(config);

  firebase.auth().signInWithEmailAndPassword('erin@erinelizabethjohnson.com', 'monkeyisabadpassword').catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(error);
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.user = user;
      console.log(window.user);
      // firebase.database().ref('todos').push({
        //Push items from list.js?

      // });
    } else {
      console.log('not signed in');
    }
  });



const App = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount() {
    this.rootRef = firebase.database().ref('todos');
    this.bindAsArray(this.rootRef.limitToLast(25), 'todos');
  },

  render() {
    return (
      <div className="App">
        <List firebaseRef={this.rootRef}/>
      </div>
    );
  }
})



export default App;
