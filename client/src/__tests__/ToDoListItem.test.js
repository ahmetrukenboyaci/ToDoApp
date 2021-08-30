import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import ToDoListItem from '../components/ToDoListItem/ToDoListItem';

configure({adapter: new Adapter()});

describe('ToDoListItem', () => {
	it('should render todolistitem component', () => {
		// eslint-disable-next-line no-unused-vars
		const wrapper = shallow(<ToDoListItem/>);
	});

	it('should render initial layout', () => {

		const component = shallow(<ToDoListItem/>);

		expect(component.getElements()).toMatchSnapshot();
	});

	it('should render text', () => {
		const data = {_id: '2', description: 'b', done: false};

		const component = shallow(<ToDoListItem data={data}/>);

		const text = component.find('#text');

		expect(text.text()).toEqual(data.description);
	});
});