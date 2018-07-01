import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewSurveyButton extends Component {
    render() {
        return (
            <Link to="/">Leave New Feedback</Link>
        )
    }
}

export default NewSurveyButton;