/** Dependencies **/
import React from 'react';
import PropTypes from 'prop-types';

/** Components **/
import ToDoListItem from '../ToDoListItem/ToDoListItem';

/** Styles **/
import styles from './toDoList.module.scss';

const ToDoList = ({data, onDelete, onComplete}) => {
	return (
		<div className={styles.toDoListContainer}>
			{data.map((item) => {
				return <ToDoListItem key={item._id} data={item} onDelete={onDelete} onComplete={onComplete}/>;
			})}
		</div>
	);
};

ToDoList.propTypes = {
	data: PropTypes.array,
	onDelete: PropTypes.func,
	onComplete: PropTypes.func
};

ToDoList.defaultProps = {
	data: []
};

export default ToDoList;