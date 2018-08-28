import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const render = Component =>
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('root')
	);

render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/App', () => render(App));

// https://medium.freecodecamp.org/learn-webpack-for-react-a36d4cac5060

(function () {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./service-worker.js', {scope: '/'})
			.then(() => console.log('Service Worker registered successfully.'))
			.catch(error => console.log('Service Worker registration failed:', error));
	}
})();