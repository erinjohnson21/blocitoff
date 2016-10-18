import React from 'react'

var SignIn = React.createClass({

  signIn () {
    //Need to setup firebase auth here?
  }

  render () {
    return (
      <form className="Login">
        <input type="email" placeholder="e-mail address" required/>
        <input type="password" placeholder="password" required/>
        <button type="submit">Login</button>
      <form>
    )
  }
})
