import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import Button from '../components/Button/Button';

configure({adapter: new Adapter()});

describe('Button', () => {
	it('should be defined', () => {
		expect(Button).toBeDefined();
	});
	it('should render correctly', () => {
		const tree = shallow(
			<Button text='button test'/>
		);
		expect(tree).toMatchSnapshot();
	});
	it('should be clicked correctly', () => {
		const mockCallBack = jest.fn();

		const button = shallow((<Button text='button test' onClick={mockCallBack} />));
		button.find('button').simulate('click');
		expect(mockCallBack.mock.calls.length).toEqual(1);
	});
});