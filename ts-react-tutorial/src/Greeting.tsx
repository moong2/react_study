import React from 'react';

type GreetingProps = {
	name: string;
	mark: string;
};

const Greetings: React.FC<GreetingProps> = ({name, mark}) => (
	<div>
		Hello, {name} {mark}
	</div>
);

Greetings.defaultProps = {
	mark: '!'
};

export default Greetings;