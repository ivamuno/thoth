import {
  createApiFactory,
  createPlugin,
  createRoutableExtension,
  configApiRef,
} from '@backstage/core-plugin-api';
import { ThothCaRestApi } from '@internal/plugin-thoth-ca-common';
import { thothCaApiApiRef } from './api';

import { rootRouteRef } from './routes';

export const thothCaPlugin = createPlugin({
  id: 'thoth-ca',
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: thothCaApiApiRef,
      deps: { configApi: configApiRef },
      factory: ({ configApi }) => ThothCaRestApi.fromConfig(configApi),
    }),
  ],
});

export const ThothCaContent = thothCaPlugin.provide(
  createRoutableExtension({
    name: 'ThothCaContent',
    component: () => import('./components/CaContent').then(m => m.CaContent),
    mountPoint: rootRouteRef,
  }),
);
