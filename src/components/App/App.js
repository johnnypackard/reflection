import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Feelings from '../FeelingPage1/FeelingPage';
import Comprehension from '../ComprehensionPage2/ComprehensionPage';
import Support from '../SupportPage3/SupportPage';
import Comments from '../CommentsPage4/CommentsPage';
import NewSurvey from '../NewSurveyPage5/NewSurveyPage';

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
            <Route exact path="/support" component={Support} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path="/thankyou" component={NewSurvey} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
