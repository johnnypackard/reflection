import React, {Component} from 'react';
import {connect} from 'react-redux';
import SubmitAndNextButton from '../Buttons/SubmitAndNextButton';
import FeedbackInput from '../FeedbackInput/FeedbackInput';

class Feelings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feelings: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            feelings: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>How are you feeling today?</h3>
                <FeedbackInput value={this.state.feelings} handleChange={this.handleChange} type="number" />
                <SubmitAndNextButton history={this.props.history} actionType="FEELINGS_SUBMIT" value={this.state.feelings} path="/comprehension" />
            </div>
        )
    }
}

export default connect()(Feelings);