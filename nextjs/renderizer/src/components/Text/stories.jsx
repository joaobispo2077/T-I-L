import { Text } from '.';

export default {
	title: 'Text',
	component: Text,
	args: {
		children:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis soluta aliquid tempora magnam deleniti, consectetur nostrum aperiam similique deserunt non recusandae nemo eligendi fugit iure voluptatum facilis assumenda! Quas, repudiandae.',
	},
	argTypes: {
		children: { type: 'string' },
	},
};

export const Template = (args) => {
	return <Text {...args} />;
};
