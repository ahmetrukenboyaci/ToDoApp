// eslint-disable-next-line no-undef
module.exports = {
	'transform': {
		'^.+\\.js$': 'babel-jest',
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
	}
};
