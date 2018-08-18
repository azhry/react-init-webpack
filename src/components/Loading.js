import React from 'react';
import ReactDelayRender from 'react-delay-render';

const Loading = () => <span>Loading...</span>;

export default ReactDelayRender({ delay: 300 })(Loading);