import { TextComponent } from '.';
export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quidem fuga, corrupti quos in atque beatae ea dolor iusto itaque nam ratione incidunt iure minus. Placeat possimus perferendis error aut.`,
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
