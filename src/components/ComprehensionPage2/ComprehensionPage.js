import React, { Component } from 'react';
import {connect} from 'react-redux';
import FeedbackInput from '../FeedbackInput/FeedbackInput';
import SubmitAndNextButton from '../Buttons/SubmitAndNextButton';

// const mapReduxToProps = (reduxStore) =>({
//     reduxStore
// })
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
                <SubmitAndNextButton history={this.props.history} actionType="COMPREHENSION_SUBMIT" value={this.state.comprehension} />
            </div>
        )
    }
}

export default connect()(Comprehension);