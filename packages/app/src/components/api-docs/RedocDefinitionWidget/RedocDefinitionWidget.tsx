/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Progress } from '@backstage/core-components';
import { ApiDefinitionWidget } from '@backstage/plugin-api-docs';
import React, { Suspense } from 'react';

// The swagger-ui component and related CSS has a significant size, only load it
// if the element is actually used.
const LazyRedocDefinition = React.lazy(() =>
  import('./RedocDefinition').then(m => ({
    default: m.RedocDefinition,
  })),
);

/** @public */
export type RedocDefinitionWidgetProps = {
  definition: string;
};

/** @public */
export const RedocDefinitionWidget = (
  props: RedocDefinitionWidgetProps,
) => {
  return (
    <Suspense fallback={<Progress />}>
      <LazyRedocDefinition {...props} />
    </Suspense>
  );
};

export const redocDefinitionWidgetSchema: ApiDefinitionWidget = {
  type: 'openapi',
  title: 'OpenAPI',
  rawLanguage: 'yaml',
  component: definition => <RedocDefinitionWidget definition={definition} />,
};
