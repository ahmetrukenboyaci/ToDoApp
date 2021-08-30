import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import ToDoList from '../components/ToDoList/ToDoList';
import ToDoListItem from '../components/ToDoListItem/ToDoListItem';

configure({adapter: new Adapter()});

describe('ToDoList', () => {
	it('should render todolist component', () => {
		// eslint-disable-next-line no-unused-vars
		const wrapper = shallow(<ToDoList/>);
	});

	it('should render initial layout', () => {

		const component = shallow(<ToDoList/>);

		expect(component.getElements()).toMatchSnapshot();
	});

	it('should render todoItem', () => {
		const data = [
			{ _id: '1', description: 'a', done: false},
			{ _id: '2', description: 'b', done: false}
		];

		const component = shallow(<ToDoList data={data}/>);

		expect(component.find(ToDoListItem)).toHaveLength(data.length);
	});
});