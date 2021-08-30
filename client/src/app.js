/** Dependencies **/
import React, {useCallback, useEffect, useState} from 'react';

/** Components **/
import ToDoInput from './components/ToDoInput/ToDoInput';
import ToDoList from './components/ToDoList/ToDoList';
import Button from './components/Button/Button';

/** Utils **/
import * as types from './utils/methodTypes';
import {request} from './utils/request';

/** Styles **/
import styles from './app.module.scss';

/** Images **/
import AddIcon from './assets/images/AddIcon';

const App = () => {
	const [toDos, setToDos] = useState([]);
	const [newTodoValue, setNewTodoValue] = useState('');

	const onTodoValueChange = useCallback((value) => {
		setNewTodoValue(value);
	}, []);

	const getToDos = useCallback((isPostOrPut=false) => {
		request('/todos', types.GET).then((r) => {
			setToDos(r);
			if (isPostOrPut)
				setNewTodoValue('');
		});
	},[]);

	const addNewTodo = useCallback(() => {
		if (newTodoValue.length) {
			const data = {
				description: newTodoValue
			};

			request('/todos', types.POST, data).then(() => getToDos(true));
		}
	}, [getToDos, newTodoValue]);

	const onDelete = useCallback((id) => {
		request(`/todos/${id}`, types.DELETE).then(() => getToDos());
	},[getToDos]);

	const onComplete = useCallback((id, done) => {
		const data = {
			done: !done
		};

		request(`/todos/${id}`, types.PUT, data).then(() => getToDos(true));
	},[getToDos]);

	const onClearAll = useCallback(() => {
		request('/todos', types.DELETE).then(() => getToDos());
	},[getToDos]);

	useEffect(() => {
		getToDos();
	}, [getToDos]);

	return (
		<div className={styles.app}>
			<div className={styles.header}>To Dos</div>
			<div className={styles.addNewToDo}>
				<ToDoInput onChange={onTodoValueChange} onKeyDown={addNewTodo} newValue={newTodoValue} />
				<div id={'add-icon'} className={styles.addIcon} onClick={addNewTodo}>
					<AddIcon height={50}/>
				</div>
			</div>
			<ToDoList data={toDos} onDelete={onDelete} onComplete={onComplete} />
			<div className={styles.footer}>
				<Button text={'Clear All'} onClick={onClearAll}/>
			</div>
		</div>
	);
};

export default App;