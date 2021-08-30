import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import ToDoInput from '../components/ToDoInput/ToDoInput';

configure({adapter: new Adapter()});

describe('ToDoInput', () => {
	it('should render todoinput component', () => {
		// eslint-disable-next-line no-unused-vars
		const wrapper = shallow(<ToDoInput/>);
	});

	it('should render initial layout', () => {

		const component = shallow(<ToDoInput/>);

		expect(component.getElements()).toMatchSnapshot();
	});

	it('should return a value on change', () => {

		let resultValue = '';

		const mockFn = (vl) => {
			resultValue = vl;
		};

		const component = shallow(<ToDoInput onChange={mockFn}/>);
		const form = component.find('input');

		form.props().onChange({
			target: {
				value: 'value'
			}
		});

		expect(resultValue).toBe('value');
	});

	it('should call onkeydown event on enter', () => {

		let resultValue = '';

		const mockFn = () => {
			resultValue = 'entered';
		};

		const component = shallow(<ToDoInput onKeyDown={mockFn}/>);
		const form = component.find('input');

		form.props().onKeyDown({
			key: 'Enter'
		});

		expect(resultValue).toBe('entered');
	});
});