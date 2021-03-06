import React, { Component } from 'react';
import {connect} from 'react-redux';
import FeedbackInput from '../FeedbackInput/FeedbackInput';
import SubmitAndNextButton from '../Buttons/SubmitAndNextButton';

// This page serves as the Support Page, which is also Page 3 of 5 for customer view
class Support extends Component {
    constructor(props) {
        super(props);
        this.state = {
            support: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>How well are you being supported?</h3>
                <FeedbackInput value={this.state.support} handleChange={this.handleChange} type="number" />
                <SubmitAndNextButton history={this.props.history} actionType="SUPPORT_SUBMIT" value={this.state.support} path="/comments" />
            </div>
        )
    }
}

export default connect()(Support);