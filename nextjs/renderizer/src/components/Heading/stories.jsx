import { Heading } from './index';

export default {
	title: 'Heading',
	component: Heading,
	args: {
		children: 'O texto está escuro',
		darken: true,
	},
	argTypes: {
		children: { type: 'string' },
	},
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
};

export const Dark = (args) => <Heading {...args} darken={true} />;
export const Light = (args) => <Heading {...args} />;

Light.parameters = {
	backgrounds: {
		default: 'dark',
	},
};

Light.args = {
	children: 'O texto está claro',
	darken: false,
};
