import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { thothCaPlugin, ThothCaContent } from '../src/plugin';

createDevApp()
  .registerPlugin(thothCaPlugin)
  .addPage({
    element: <ThothCaContent />,
    title: 'Root Page',
    path: '/thoth-ca'
  })
  .render();
