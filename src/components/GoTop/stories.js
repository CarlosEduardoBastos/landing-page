import { GoTop } from '.';
export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi a modi unde sunt voluptas dolores possimus
        veritatis culpa cum, quam aspernatur laudantium! Voluptatibus temporibus minus amet sequi recusandae ad!
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi a modi unde sunt voluptas dolores possimus
        veritatis culpa cum, quam aspernatur laudantium! Voluptatibus temporibus minus amet sequi recusandae ad!
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi a modi unde sunt voluptas dolores possimus
        veritatis culpa cum, quam aspernatur laudantium! Voluptatibus temporibus minus amet sequi recusandae ad!
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi a modi unde sunt voluptas dolores possimus
        veritatis culpa cum, quam aspernatur laudantium! Voluptatibus temporibus minus amet sequi recusandae ad!
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi a modi unde sunt voluptas dolores possimus
        veritatis culpa cum, quam aspernatur laudantium! Voluptatibus temporibus minus amet sequi recusandae ad!
      </p>
      <GoTop {...args} />
    </div>
  );
};
