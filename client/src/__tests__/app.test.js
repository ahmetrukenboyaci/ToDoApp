import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import app from '../app';

configure({adapter: new Adapter()});

describe('app', () => {
	it('should render app component', () => {
		// eslint-disable-next-line no-unused-vars
		const wrapper = shallow(<app/>);
	});

	it('should render initial layout', () => {

		const component = shallow(<app/>);

		expect(component.getElements()).toMatchSnapshot();
	});
});