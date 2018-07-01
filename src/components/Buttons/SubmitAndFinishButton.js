import React, {Component} from 'react';
import {connect} from 'react-redux';

class SubmitAndFinishButton extends Component {
    submitAndFinish = () => {
        const action = {
            type: this.props.actionType,
            payload: this.props.value
        }
        this.props.dispatch(action);
        this.props.history.push('/thanks');
    }

    render() {
        return(
            <button onClick={this.submitAndFinish}>Submit</button>
        )
    }
}

export default connect()(SubmitAndFinishButton);