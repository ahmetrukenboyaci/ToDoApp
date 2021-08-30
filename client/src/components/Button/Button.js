/** Dependencies **/
import React from 'react';
import PropTypes from 'prop-types';

/** Components **/
/** Styles **/
import styles from './button.module.scss';

const Button = ({text, onClick}) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func
};

export default Button;