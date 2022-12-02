import { SectionBackground } from '.';
export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere fuga dolorum id corporis impedit deleniti
          illo, neque voluptatibus, debitis harum, natus quae modi expedita. Cupiditate molestias dignissimos itaque
          officiis nobis.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
