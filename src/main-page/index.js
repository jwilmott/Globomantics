import React, { Component } from 'react';
import logo from './logo.svg';
import './main-page.css';
import Header from './header';

class App extends Component {
  render() {
    return (
        <div className="container">
            <Header subtitle="Providing stuff worldwide!"/>
        </div>
    );
  }
}

export default App;
