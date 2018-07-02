import React, { Component } from 'react';
import axios from 'axios';
import AdminFeedback from './AdminFeedback';

// The Admin Page allows admins to view and delete
// any and all feedback which has been input by the user

class Admin extends Component {
    constructor (props) {
        super (props);
        this.state = {
            feedback: []
        }
    }

    componentDidMount = () => {
        this.allFeedback();
    }

    allFeedback = () => {
        axios.get('/api/feedback')
            .then((response) => {
                this.setState ({
                    feedback: response.data
                });
            })
            .catch((error) => {
                alert('There was an error getting feedback', error);
            })
    }
    
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Feelings</td>
                            <td>Comprehension</td>
                            <td>Support</td>
                            <td>Comments</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedback.map(item => <AdminFeedback item={item} allFeedback={this.allFeedback}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Admin;