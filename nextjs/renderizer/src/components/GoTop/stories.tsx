import { GoTop } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum
        possimus quis ab nobis voluptatem praesentium minus minima eos, eaque
        corporis cumque odit aut numquam, impedit mollitia ipsum neque nam!
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipis</p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum
        possimus quis ab nobis voluptatem praesentium minus minima eos, eaque
        corporis cumque odit aut numquam, impedit mollitia ipsum neque nam!
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipis</p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum
        possimus quis ab nobis voluptatem praesentium minus minima eos, eaque
        corporis cumque odit aut numquam, impedit mollitia ipsum neque nam!
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipis</p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum
        possimus quis ab nobis voluptatem praesentium minus minima eos, eaque
        corporis cumque odit aut numquam, impedit mollitia ipsum neque nam!
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipis</p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum
        possimus quis ab nobis voluptatem praesentium minus minima eos, eaque
        corporis cumque odit aut numquam, impedit mollitia ipsum neque nam!
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipis</p>
      <GoTop {...args} />
    </div>
  );
};
