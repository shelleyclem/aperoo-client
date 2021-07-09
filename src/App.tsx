import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login';
import { render } from '@testing-library/react';

type AcceptedProps = {}

type AppState = {
  sessionToken: string | null
}

export default class app extends Component<AcceptedProps, AppState>{
  constructor(props: AcceptedProps)
  super(props)

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Test</h1>
//         <Login />
//       </header>
//     </div>
//   );
// }

// export default App;

