import React, { Component } from 'react';
import {connect} from 'react-redux';

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