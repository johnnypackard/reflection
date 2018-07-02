import React, { Component } from 'react';
import NewSurveyButton from '../Buttons/NewSurveyButton';

// This page serves as the final landing page, 
// which is also Page 5 of 5 for customer view
// the user is able to begin a new survey upon
// clicking the NewSurveyButton

class NewSurvey extends Component {
    render() {
        return (
            <div>
                <h3>Thank you!</h3>
                <NewSurveyButton />
            </div>
        )
    }
}

export default NewSurvey;