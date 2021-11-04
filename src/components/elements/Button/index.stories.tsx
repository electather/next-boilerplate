import { Meta } from '@storybook/react';
import Button, { ButtonProps } from './index';

export default {
  title: `Button`,
  component: Button,
  argTypes: {
    variant: {
      options: [`solid`, `outlined`, `text`],
      control: { type: `select` },
      defaultValue: `solid`,
    },
    size: {
      options: [`small`, `medium`, `large`],
      control: { type: `select` },
      defaultValue: `medium`,
    },
    color: {
      options: [`primary`, `danger`, `default`],
      control: { type: `select` },
      defaultValue: `default`,
    },
    onClick: { action: `clicked` },
  },
} as Meta;

export const main = (props: ButtonProps) => <Button {...props}>Button</Button>;
