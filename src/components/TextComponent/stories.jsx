import { TextComponent } from '.';
export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, quaerat. Qui sint nulla illum. Voluptatum, modi! Quos fugit possimus aliquid aliquam, eligendi non sapiente saepe cum pariatur, ipsam tempora accusantium?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
