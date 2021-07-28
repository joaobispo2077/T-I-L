import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          inventore ullam tempore enim porro aliquam eligendi totam eaque, nemo
          adipisci dolores numquam, maxime quisquam, a nam voluptate similique?
          Sit, tempore.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return <SectionContainer {...args} />;
};
