import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Site/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

// type AcceptedProps = {
// //   sessionToken: string,
// //   updateToken: (newToken: string) => void,
// //   clearToken: () => void
// // 
// }

// type AppState = {
//   sessionToken: string,
//   // updateToken: (newToken: string) => void,
//   // clearToken: () => void
  


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionToken: ('')
    }
    this.updateToken = this.updateToken.bind(this)
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({
        sessionToken: localStorage.getItem('token')
      })
    }
  }

  clearToken() {
    localStorage.clear();
    window.location.reload()
  }

  updateToken(newToken) {
    localStorage.setItem('token', newToken)
    this.setState({
      sessionToken: newToken
    }, () => console.log(this.state.sessionToken))
  }

  render() {
    return (
      <div className='App'>
        <Router>
        <NavBar updateToken={this.updateToken} sessionToken={this.state.sessionToken} clearToken={this.clearToken}/>
        </Router>
      </div>
    )
  }
}