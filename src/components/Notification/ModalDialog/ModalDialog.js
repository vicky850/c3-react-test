import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
require('../../../assets/style/css/ModalDialog.css');

/**
 * Summary: Modal Dialog
 * Description: display modal pop up with confirm and close buttons 
 * @author Vikash Kumar.
 * @date  11.07.2018
 */
const ModalDialog = (message, onConfirmation) => {
    return confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className="confirmation-alert">
                    <h1>{ message }</h1>
                    <button onClick={ onClose }>No</button>
                    <button onClick={ () => {
                        onConfirmation()
                        onClose()
                    }}>Yes</button>
                </div>
            )
        }
    });
};

export default ModalDialog;