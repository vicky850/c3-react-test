/**
 * Summary: User Profile
 * Description: User profile (stateless component)
 * @author Vikash Kumar.
 * @date  28.06.2018
 */
import React from 'react';
import PropTypes from 'prop-types';
import { actionTypes } from '../../constants/action-type.constants';

require('../../assets/style/css/UserProfile.css');

export const UserProfile = (props) => {
  return (
    <div className="box">
      <div className="profile-image"><img src={props.avatar} alt="" /></div>
      <h2>{props.first_name} {props.last_name}</h2>
      <span className="delete" data-action={actionTypes.DELETE_DATA} onClick={(e) => props.optionHandler(e)}>Delete</span>
    </div>
  )
}
/*
*required props
*/
UserProfile.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};