import React from 'react';

const SignIn = React.createClass({


  signIn: function() {
    var rootRef = this.props.rootRef;
    var email = this.emailInput.value;
    var password = this.passInput.value;

    rootRef.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

      console.log(error);
    });

  },

  signUp: function() {
    var rootRef = this.props.rootRef;
    var email = this.emailInput.value;
    var password = this.passInput.value;

    rootRef.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error);
    });
  },

  render() {
    console.log(this.props);
    return (
      <div className="login-form">
        <h1>Todo App</h1>
        <p>Enter your email and password to log in or sign up!</p>
        <input className="email" ref={(input) => { this.emailInput = input; }} placeholder="Email Address" type="email"></input>
        <input className="pass" ref={(input) => { this.passInput = input; }} placeholder="Password" type="password"></input>
        <div className="buttons">
        <button className="form-button" onClick={this.signIn}>Log In</button>
        <button className="form-button" onClick={this.signUp}>Sign Up</button>
        </div>
      </div>
    );
  }
});
export default SignIn;
