## API Report File for "@backstage/plugin-tech-insights"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { ApiRef } from '@backstage/core-plugin-api';
import { BackstagePlugin } from '@backstage/core-plugin-api';
import { BulkCheckResponse } from '@backstage/plugin-tech-insights-common';
import { CheckResult } from '@backstage/plugin-tech-insights-common';
import { CompoundEntityRef } from '@backstage/catalog-model';
import { DiscoveryApi } from '@backstage/core-plugin-api';
import { FactSchema } from '@backstage/plugin-tech-insights-common';
import { IdentityApi } from '@backstage/core-plugin-api';
import { JsonValue } from '@backstage/types';
import { default as React_2 } from 'react';
import { RouteRef } from '@backstage/core-plugin-api';

// @public (undocumented)
export const BooleanCheck: (props: { checkResult: CheckResult }) => JSX.Element;

// @public
export type Check = {
  id: string;
  type: string;
  name: string;
  description: string;
  factIds: string[];
  successMetadata?: Record<string, unknown>;
  failureMetadata?: Record<string, unknown>;
};

// @public
export type CheckResultRenderer = {
  type: string;
  component: (check: CheckResult) => React_2.ReactElement;
};

// @public (undocumented)
export const EntityTechInsightsScorecardCard: (props: {
  title: string;
  description?: string | undefined;
  checksId?: string[] | undefined;
}) => JSX.Element;

// @public (undocumented)
export const EntityTechInsightsScorecardContent: (props: {
  title: string;
  description?: string | undefined;
  checksId?: string[] | undefined;
}) => JSX.Element;

// @public
export interface InsightFacts {
  // (undocumented)
  [factId: string]: {
    timestamp: string;
    version: string;
    facts: Record<string, JsonValue>;
  };
}

// @public
export const jsonRulesEngineCheckResultRenderer: CheckResultRenderer;

// @public
export interface TechInsightsApi {
  // (undocumented)
  getAllChecks(): Promise<Check[]>;
  // (undocumented)
  getCheckResultRenderers: (types: string[]) => CheckResultRenderer[];
  // (undocumented)
  getFacts(entity: CompoundEntityRef, facts: string[]): Promise<InsightFacts>;
  // (undocumented)
  getFactSchemas(): Promise<FactSchema[]>;
  // (undocumented)
  runBulkChecks(
    entities: CompoundEntityRef[],
    checks?: Check[],
  ): Promise<BulkCheckResponse>;
  // (undocumented)
  runChecks(
    entityParams: CompoundEntityRef,
    checks?: string[],
  ): Promise<CheckResult[]>;
}

// @public
export const techInsightsApiRef: ApiRef<TechInsightsApi>;

// @public (undocumented)
export class TechInsightsClient implements TechInsightsApi {
  constructor(options: {
    discoveryApi: DiscoveryApi;
    identityApi: IdentityApi;
    renderers?: CheckResultRenderer[];
  });
  // (undocumented)
  getAllChecks(): Promise<Check[]>;
  // (undocumented)
  getCheckResultRenderers(types: string[]): CheckResultRenderer[];
  // (undocumented)
  getFacts(entity: CompoundEntityRef, facts: string[]): Promise<InsightFacts>;
  // (undocumented)
  getFactSchemas(): Promise<FactSchema[]>;
  // (undocumented)
  runBulkChecks(
    entities: CompoundEntityRef[],
    checks?: Check[],
  ): Promise<BulkCheckResponse>;
  // (undocumented)
  runChecks(
    entityParams: CompoundEntityRef,
    checks?: string[],
  ): Promise<CheckResult[]>;
}

// @public (undocumented)
export const techInsightsPlugin: BackstagePlugin<
  {
    root: RouteRef<undefined>;
  },
  {},
  {}
>;

// (No @packageDocumentation comment for this package)
```