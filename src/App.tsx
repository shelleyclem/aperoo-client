import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type AcceptedProps = {
  sessionToken: string,
}

type AppState = {
  sessionToken: string 
  
}

export default class App extends Component<AcceptedProps, AppState>{
  constructor(props: AcceptedProps) {
    super(props)
    this.state = {
      sessionToken: ('')
    }
    this.updateToken = this.updateToken.bind(this)
  }

  componentDidMount() {
    if(localStorage.getItem('token')) {
      this.setState({
        sessionToken: localStorage.getItem('token')
      })
    }
  }

  clearToken() {
    localStorage.clear();
    window.location.reload()
  }

  updateToken(newToken: string) {
    localStorage.setItem('token', newToken)
    this.setState({
      sessionToken: newToken
    }, () => console.log(this.state.sessionToken))
  }

  render() {
    return (
      <div className='App'>
        
      </div>
    )
  }
}