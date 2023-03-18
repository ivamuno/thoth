import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { thothCaPlugin, ThothCaPage } from '../src/plugin';

createDevApp()
  .registerPlugin(thothCaPlugin)
  .addPage({
    element: <ThothCaPage />,
    title: 'Root Page',
    path: '/thoth-ca'
  })
  .render();
