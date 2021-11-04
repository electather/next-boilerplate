import '../src/styles/global.css';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';

export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      { name: 'dark', value: '#3c3c3c' },
      { name: 'white', value: '#ffffff' },
    ],
  },
};
