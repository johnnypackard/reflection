import React from 'react';

const FeedbackInput = (props) => {
    <input type={props.type} value={props.value} onChange={props.handleChange} />
}

export default FeedbackInput;