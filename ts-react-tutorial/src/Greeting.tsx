import React from 'react';

type GreetingProps = {
	name: string;
	mark: string;
};

const Greetings = ({name, mark}: GreetingProps) => (
	<div>
		Hello, {name} {mark}
	</div>
)

Greetings.defaultProps = {
	mark: '!'
};

export default Greetings;