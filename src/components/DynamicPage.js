import React from 'react';
import { Button } from 'antd';
import Layout from './Layout';

const DynamicPage = () => {
	return (
		<Layout>
			<p>This page was loaded asynchronously!!!</p>
			<Button type="primary">Click here!</Button>
		</Layout>
	);
};

export default DynamicPage;