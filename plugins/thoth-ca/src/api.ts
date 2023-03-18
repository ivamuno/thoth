import { createApiRef } from '@backstage/core-plugin-api';
import { ThothCaApi } from '../../thoth-ca-common/src';

/** @public */
export const thothCaApiApiRef = createApiRef<ThothCaApi>({
  id: 'plugin.thoth-ca-api.service',
});