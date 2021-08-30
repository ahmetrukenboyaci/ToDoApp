import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import App from './App';

ReactDOM.render(<App/>, document.getElementById('app'));

// eslint-disable-next-line no-undef
module.hot.accept();