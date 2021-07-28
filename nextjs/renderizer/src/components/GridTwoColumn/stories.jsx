import { GridTwoColumn } from '.';
import mockGridTwoColumn from './mock';

export default {
	title: 'GridTwoColumn',
	component: GridTwoColumn,
	args: mockGridTwoColumn,
	argTypes: {
		children: { type: 'string' },
	},
};

export const Template = (args) => {
	return <GridTwoColumn {...args} />;
};
