/**
 * Summary: PersonUsers component which render the UserProfile list
 * Description: PersonUsers component which render the UserProfile list
 * @author Vikash Kumar.
 * @date  28.06.2018
 */
import React, { Component } from "react";
import { UserProfile } from '../UserProfile/UserProfile'
import { actionTypes } from '../../constants/action-type.constants';
import { alertConstants } from '../../constants/alert.constants';
import { userActions } from '../../actions/user.actions';
import NotificationMessage from '../Notification/NotificationMessage/NotificationMessage';
import ModalDialog from '../Notification/ModalDialog/ModalDialog';
import Loader from '../Loader/Loader';

import _ from 'lodash';
require('../../assets/style/css/PearsonUsers.css');

/*
*Pearson User Class
*/
export class PearsonUsers extends Component {

  /*
  *initialisation of state and bindings
  */
  constructor(props) {
    super(props);
    this.optionHandler = this.optionHandler.bind(this);
    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ],
      alert: { type: null, message: null },
      page: 1,
      per_page: 10,
      dataFetched: false
    };
  }

  /*
  *life cycle hook for fetching data/ajax calls
  */
  componentDidMount() {
    this.displayUsers();
  }

/*
* display users
*/
  displayUsers = () => {
    //get user list
    userActions.getUsers(this.state.page, this.state.per_page).then(
      (response) => {
        if (response.type === alertConstants.SUCCESS) {
          const allUsers = [...this.state.users, ...response.data];
          const error_alert = { type: null, message: null };
          this.setState({ users: this.removeDuplicate(allUsers), alert: error_alert, dataFetched: true });
        } else if (response.type === alertConstants.ERROR) {
          const error_alert = { type: response.type, message: response.message.message };
          this.setState({ alert: error_alert, dataFetched: false });
        }
      }
    ).catch(this.errorHandle);
  }

/*
* remove duplicate entries
*/
  removeDuplicate(dataArray) {
    return _.map(_.mapKeys(dataArray, 'id'));
  }

/*
* delete users based on user id
*/
  deleteUser(id) {
    const newUserList = [...this.state.users]; // make a separate copy of the array
    const index = newUserList.findIndex(user => user.id === id);
    newUserList.splice(index, 1);
    this.setState({ users: newUserList });
  }

/*
* user action, delete action here
*/
  optionHandler(e, id) {
    if (e.target.dataset.action === actionTypes.DELETE_DATA) {
      ModalDialog("Are you sure, you want to delete this user ?", () => this.deleteUser(id));
    }
  }

  /*
  *get userprofile component
  * */
  getUserProfile = () => {
    return (
      <div className="bx-wrapper">
        {
          this.state.users.map((user) => {
            return (
              <UserProfile key={user.id} optionHandler={(e) => this.optionHandler(e, user.id)} {...user} />
            );
          })
        }
      </div>
    );
  }

  /*
  *get notification component
  * */
  getNotification = (alert) => {
    return (
      <NotificationMessage {...alert} />
    );
  }

  /*
  *get component based on condition
  * */
  getComponent = () => {
    let component = <Loader />
    component = this.state.alert.message ? this.getNotification(this.state.alert)
      : (this.state.dataFetched ? this.getUserProfile()
        : component);
    return component;
  }

  /*
  *render component
  * */
  render() {
    return (
      <div className="pearson-users">
        <h1>Pearson User Management</h1>
          {this.getComponent()}
      </div>
    );
  }
}
