import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Feelings from '../FeelingPage1/FeelingPage';
import Comprehension from '../ComprehensionPage2/ComprehensionPage';
import Support from '../SupportPage3/SupportPage';
import Comments from '../CommentsPage4/CommentsPage';
import NewSurvey from '../NewSurveyPage5/NewSurveyPage';
import Admin from '../AdminPage/AdminPage';
import 'typeface-roboto';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
// import blueGrey from '@material-ui/core/colors/blueGrey';
// import deepPurple from 'material-ui/core/colors/deepPurple';
// import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6746c3',
      main: '#311b92',
      dark: '#000063',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#bfd4df',
      main: '#8fa3ad',
      dark: '#61747e',
      contrastText: '#000000',
    }
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
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
              <Route exact path="/admin" component={Admin} />
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
