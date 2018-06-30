import React, { Component } from 'react';
import {connect} from 'react-redux';
import FeedbackInput from '../FeedbackInput/FeedbackInput';
import SubmitAndNextButton from '../Buttons/SubmitAndNextButton';

const mapReduxToProps = (reduxStore) =>({
    reduxStore
})
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
                <h3>How well are you understanding the content?</h3>
                <FeedbackInput value={this.state.comments} handleChange={this.handleChange} type="number" />
                <SubmitAndNextButton history={this.props.history} actionType="COMMENTS_SUBMIT_SEND" value={this.state.comments} />
            </div>
        )
    }
}

export default connect(mapReduxToProps)(Comments);