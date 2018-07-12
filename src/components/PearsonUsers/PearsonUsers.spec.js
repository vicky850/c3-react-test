import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { PearsonUsers } from "./PearsonUsers";
import { UserProfile } from '../UserProfile/UserProfile';
import NotificationMessage from '../Notification/NotificationMessage/NotificationMessage';
import MockUsers from '../../_mockdata/PearsonUsers.json';
import {customErrorConst, alertConstants} from "../../constants";

configure({ adapter: new Adapter() })
//test case for rendring user list and elements
describe('PearsonUsers Test Suite', function () {
    let component;
    beforeEach(() => {
        component = shallow(<PearsonUsers />);
        component.setState({
            dataFetched: false,
            alert: { type: null, message: null }
        });
    })

    afterEach(() => {
        component = null;
    });

    it('should render without throwing any error', function () {
        expect(component.length).toEqual(1)
    })

    it("renders a h1", () => {
        const h1 = component.find("h1");
        expect(h1.text()).toEqual("Pearson User Management");
    });

    it("it should render a UserProfile", () => {
        component.setState({ dataFetched: true });
        const totalUsers = component.state().users.length;
        expect(component.find(UserProfile)).toHaveLength(totalUsers);
    });

    it("it should render initial layout", () => {
        expect(component.getElements()).toMatchSnapshot();
    });

    it('it should return UserProfile list when data is loaded', () => {
        const spy = jest.spyOn(component.instance(), 'getUserProfile');
        component.setState({ dataFetched: true });
        expect(spy).toHaveBeenCalledTimes(1);
        expect(component.find(UserProfile).exists()).toBeTruthy();
    });

    it("it should remove duplicate entries", () => {
        const totalUsers = [...component.state().users, ...MockUsers];
        const filteredUserList = component.instance().removeDuplicate(totalUsers, 'id');
        const userIds = filteredUserList.map((user) => user.id);
        const ifDuplicate = userIds.some((id, index) => userIds.indexOf(id) != index);
        expect(filteredUserList.length).toBe(3);
        expect(ifDuplicate).toBeFalsy();
    });

    it('it should delete user by its id property', () => {
        component.setState({ users: [...MockUsers] });
        const userId = component.state().users[0].id;
        component.instance().deleteUser(userId);
        const ifUserExist = component.state().users.some((user) => user.id === userId); //check if user exists after deletion
        expect(ifUserExist).toBeFalsy();
    });

    it('it should return Notification Message when data is not presend due to some error', () => {
        const spy = jest.spyOn(component.instance(), 'getNotification');
        component.setState({ alert: { type: alertConstants.ERROR, message: customErrorConst.ERROR_DEFAULT } });
        expect(spy).toHaveBeenCalledTimes(1);
        expect(component.find(NotificationMessage).exists()).toBeTruthy();
    });

})
