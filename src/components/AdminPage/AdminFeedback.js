import React from 'react';
import AdminDeleteButton from '../Buttons/AdminDeleteButton';

// This page is accessible to anyone who uses "/admin" path.
// in the future, I would like to add authenticated users to
// grant access to areas of the app

const AdminFeedback = (props) => (
    <tr>
                <td>{props.item.feelings}</td>
                <td>{props.item.comprehension}</td>
                <td>{props.item.support}</td>
                <td>{props.item.comments}</td>
                <td><AdminDeleteButton id={props.item.id} allFeedback={props.allFeedback} /></td>
            </tr>    
);

export default AdminFeedback;