import React, { Component } from 'react';
import axios from 'axios';

class AdminDeleteButton extends Component {
    deleteFeedback = () => {
        axios.delete(`/api/feedback/${this.props.id}`)
            .then((response) => {
                console.log(response);
                this.props.allFeedback();
            })
            .catch((error) => {
                alert('Error deleting feedback');
            })
    }

    render () {
        return (
            <button onClick={this.deleteFeedback}>Delete</button>
        )
    }
}

export default AdminDeleteButton;