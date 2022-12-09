import { Footer } from '.';
export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: 'Footer',
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
