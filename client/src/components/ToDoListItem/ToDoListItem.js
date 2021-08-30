/** Dependencies **/
import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './toDoListItem.module.scss';

/** Images **/
import Uncompleted from '../../assets/images/Uncompleted';
import Completed from '../../assets/images/Completed';
import Delete from '../../assets/images/Delete';

const ToDoListItem = ({data, onDelete, onComplete}) => {
	const onToDoDelete = useCallback(() => {
		onDelete(data._id);
	}, [data?._id, onDelete]);

	const onToDoComplete = useCallback(() => {
		onComplete(data._id, data.done);
	}, [data?._id, data?.done, onComplete]);

	return (
		<div id={'toDoListItemContainer'} className={`${styles.toDoListItemContainer} ${data?.done ? styles.done : ''}`}>
			<div id={'text'} className={styles.text}>
				{data?.description}
			</div>
			<div className={styles.iconContainer}>
				<div onClick={onToDoComplete} className={styles.toggleCompletion}>
					{data?.done ? <Completed height={20}/> : <Uncompleted height={20}/>}
				</div>
				<div onClick={onToDoDelete} className={styles.deleteToDo}>
					<Delete height={20}/>
				</div>
			</div>
		</div>
	);
};

ToDoListItem.propTypes = {
	data: PropTypes.object,
	onDelete: PropTypes.func,
	onComplete: PropTypes.func
};

export default ToDoListItem;