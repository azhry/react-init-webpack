import React from 'react';
import { Button } from 'antd';

const DynamicPage = () => {
	return (
		<div>
			<p>This page was loaded asynchronously!!!</p>
			<Button type="primary">Click here!</Button>
		</div>
	);
};

export default DynamicPage;