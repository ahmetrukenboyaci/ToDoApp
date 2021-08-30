/** Dependencies **/
import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './toDoInput.module.scss';

const ToDoInput = ({onChange, onKeyDown, newValue}) => {
	const onValueChange = useCallback((vl) => {
		onChange(vl);
	}, [onChange]);

	return (
		<div className={styles.toDoInputContainer}>
			<input
				value={newValue}
				onChange={e => onValueChange(e.target.value)}
				onKeyDown={e => (e.key === 'Enter') ? onKeyDown() : {}}
				placeholder={'Add a To Do'}
			/>
		</div>
	);
};

ToDoInput.propTypes = {
	onChange: PropTypes.func,
	onKeyDown: PropTypes.func,
	newValue: PropTypes.string
};

export default ToDoInput;