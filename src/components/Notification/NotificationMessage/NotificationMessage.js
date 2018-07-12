import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/style/css/NotificationMessage.css';
/**
 * Summary: Notification Message
 * Description: display error, success or warning message based on type 
 * @author Vikash Kumar.
 * @date  11.07.2018
 */
const NotificationMessage = (props) => {
    return (
        <div>
            <div id="alert-message" className={`alert alert-${props.type}`}>{props.message}</div>
        </div>
    );
}
NotificationMessage.propTypes = {
    message: PropTypes.string.isRequired
};

export default NotificationMessage;