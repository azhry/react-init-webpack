import React from 'react';
import { Rating } from 'semantic-ui-react';

import Layout from './Layout';

const DynamicPage = () => {
	return (
		<Layout>
			<Rating />
			<p>This page was loaded asynchronously!!!</p>
		</Layout>
	);
};

export default DynamicPage;