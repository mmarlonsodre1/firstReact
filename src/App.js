import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render(){
    const { children } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link className="App-link" to='*'>Error Screen</Link>
        </header>
  
        <div>
          {/* you can insert the menu here */}
          {children}
        </div>
      </div>
    );
  }
}

export default App;
