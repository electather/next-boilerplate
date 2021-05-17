/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './index';

export default {
  title: `Button`,
};

export const primary = () => (
  <Button
    onClick={action(`clicked`)}
    variant="solid"
    size="large"
    color="danger"
  >
    Button
  </Button>
);
