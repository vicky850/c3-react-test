import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import NotificationMessage from './NotificationMessage';

configure({ adapter: new Adapter() });
describe('NotificationMessage', () => {
    let component;
    let alert;

    beforeEach(() => {
        alert = {
            type: "error",
            message: "Not able to perform action. Please try lator"
        }
        component = shallow(<NotificationMessage {...alert} />);
    });

    afterEach(() => {
        component = null;
    });

    it('should render the message', () => {
        expect(component.find('#alert-message').text()).toEqual(alert.message);
    });
});