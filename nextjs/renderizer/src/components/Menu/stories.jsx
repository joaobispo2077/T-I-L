import { Menu } from '.';
import linksMock from '../NavLinks/mock';

export default {
	title: 'Menu',
	component: Menu,
	args: {
		links: linksMock,
		logo: {
			text: 'Logo',
			link: '#target',
			src: '',
		},
	},
	argTypes: {
		children: { type: 'string' },
	},
};

export const Template = (args) => {
	return (
		<div style={{ height: '300vh', background: 'gray' }}>
			<Menu {...args} />
		</div>
	);
};
