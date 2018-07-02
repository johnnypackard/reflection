import React, { Component } from 'react';
import {connect} from 'react-redux';

// "FeedbackInput" serves as a general template for all pages (1-5) of the feedback
// by adding a generic input type, value, and onChange, the app is able to utilize
// just one input form, keeping the code relatively more dry

const mapReduxToProps = (reduxStore) => ({
    reduxStore
})
class FeedbackInput extends Component {
    render() {
        return (
            <input type={this.props.type} value={this.props.value} onChange={this.props.handleChange} />
        );
    }
}

export default connect(mapReduxToProps)(FeedbackInput);