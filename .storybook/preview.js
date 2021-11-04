import '../src/styles/global.css';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'dark', value: '#f9fafb' },
      { name: 'white', value: '#ffffff' },
    ],
  },
};
