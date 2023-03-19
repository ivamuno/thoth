import {
  createRouter,
  buildTechInsightsContext,
  createFactRetrieverRegistration,
} from '@backstage/plugin-tech-insights-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { JsonRulesEngineFactCheckerFactory } from '@backstage/plugin-tech-insights-backend-module-jsonfc';
import {
  entityMetadataFactRetriever,
  techInsightRuleChecks,
} from '@internal/tech-insights-thoth-backend';

const ttlTwoWeeks = { timeToLive: { weeks: 2 } };

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const techInsightsContext = await buildTechInsightsContext({
    logger: env.logger,
    config: env.config,
    database: env.database,
    discovery: env.discovery,
    tokenManager: env.tokenManager,
    scheduler: env.scheduler,
    factRetrievers: [
      createFactRetrieverRegistration({
        cadence: '*/1 * * * *',
        factRetriever: entityMetadataFactRetriever,
        lifecycle: ttlTwoWeeks,
      }),
    ],
    factCheckerFactory: new JsonRulesEngineFactCheckerFactory({
      logger: env.logger,
      checks: techInsightRuleChecks,
    }),
  });

  return await createRouter({
    ...techInsightsContext,
    logger: env.logger,
    config: env.config,
  });
}
