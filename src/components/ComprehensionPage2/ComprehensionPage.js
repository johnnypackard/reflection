import React, { Component } from 'react';
import {connect} from 'react-redux';
import FeedbackInput from '../FeedbackInput/FeedbackInput';
import SubmitAndNextButton from '../Buttons/SubmitAndNextButton';

// This page serves as the Comprehension Page, which is also Page 2 of 5 for customer view

class Comprehension extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comprehension: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            comprehension: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>How well are you understanding the content?</h3>
                <FeedbackInput value={this.state.comprehension} handleChange={this.handleChange} type="number" />
                <SubmitAndNextButton history={this.props.history} actionType="COMPREHENSION_SUBMIT" value={this.state.comprehension} path="/support" />
            </div>
        )
    }
}

export default connect()(Comprehension);