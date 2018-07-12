import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import {UserProfile} from './UserProfile';

configure({adapter : new Adapter()});

describe('PearsonUser', () => {
    let pearsonUser;
    let component;

    beforeEach(() => {
        pearsonUser = {
            id: 4,
            first_name: "Eve",
            last_name: "Holt",
            avatar: "assets/testImage.jpg"
        }
        
        component = shallow(<UserProfile {...pearsonUser} />);
    });

    afterEach(() => {
        pearsonUser = null;
        component = null;
    });

    it('it should render user first name and last name ', () => {
        const fullName = `${pearsonUser.first_name} ${pearsonUser.last_name}`;
        expect(component.find('h2').text()).toEqual(fullName);
    });

    it('it should render image of pearsonUser avatar', () => {
        expect(component.find('img').prop('src')).toEqual(pearsonUser.avatar);
    });

    it('should execute the function passed optionHandler, when delete button is clicked', () => {
        const mockFn = jest.fn();
        component.setProps({ optionHandler: mockFn });
        component.find('span').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});