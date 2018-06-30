import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Feelings from '../FeelingPage1/FeelingPage';
import Comprehension from '../ComprehensionPage2/ComprehensionPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <Router>
          <div>
            <Route exact path="/" component={Feelings} />
            <Route exact path="/comprehension" component={Comprehension} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
