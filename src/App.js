import React, { Component } from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
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

  firebase.auth().signInWithEmailAndPassword('erin@erinelizabethjohnson.com', 'monkeyisabadpassword').catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(error);
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      firebase.database().ref('todos').push({
        // text: 'blah blah',
        // time: Date.now(),
        // user: user.email,
      });
    } else {
      console.log('not signed in');
    }
  });



class App extends Component {

  componentWillMount() {
    const rootRef = firebase.database().ref().child('todos');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload ok.
        </p>
        <List />
      </div>
    );
  }
}

export default App;
