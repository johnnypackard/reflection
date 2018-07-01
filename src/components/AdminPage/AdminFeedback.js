import React from 'react';
import AdminDeleteButton from '../Buttons/AdminDeleteButton';
// import {connect} from 'react-redux';
// import Admin from './AdminPage';

// const mapReduxToProps = (reduxStore) => ({
//     reduxStore
// })

// class AdminFeedback extends Component {
//     render() {
//         return (
const AdminFeedback = (props) => (
    <tr>
                <td>{props.item.feelings}</td>
                <td>{props.item.comprehension}</td>
                <td>{props.item.support}</td>
                <td>{props.item.comments}</td>
                <td><AdminDeleteButton id={props.item.id} allFeedback={props.allFeedback} /></td>
            </tr>    
);
            
//         )
//     }
// }

export default AdminFeedback;