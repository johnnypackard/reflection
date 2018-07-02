import React, { Component } from 'react';
import {connect} from 'react-redux';
import FeedbackInput from '../FeedbackInput/FeedbackInput';
import SubmitAndFinishButton from '../Buttons/SubmitAndFinishButton';

// This page serves as the Comments Page for additional comments, which is also Page 4 of 5 for customer view

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Any comments you would like to leave?</h3>
                <FeedbackInput value={this.state.comments} handleChange={this.handleChange} type="text" />
                <SubmitAndFinishButton history={this.props.history} actionType="COMMENTS_SUBMIT_SEND" value={this.state.comments} path="/thankyou" />
            </div>
        )
    }
}

export default connect()(Comments);