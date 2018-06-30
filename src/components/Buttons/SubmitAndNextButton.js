import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmitAndNextButton extends Component {
    submitAndNext = () => {
        const action = {
            type: this.props.actionType,
            payload: this.props.value
        };
        this.props.dispatch(action);
        this.props.history.push(this.props.path);
    }
    render() {
        return (
            <button onClick={this.submitAndNext}>Next Page</button>
        )
    }
}

export default connect()(SubmitAndNextButton);