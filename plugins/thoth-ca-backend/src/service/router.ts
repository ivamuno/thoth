import { errorHandler } from '@backstage/backend-common';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
import { ThothCaSummary } from '../../../thoth-ca-common/src/api';

export interface RouterOptions {
  logger: Logger;
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger } = options;

  const router = Router();
  router.use(express.json());

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });
  router.get('/summaries/:entityRef', (_, response) => {
    const result: ThothCaSummary = {
      'Service Ownership': {
        'Owner Defined': {
          tier: 'B',
          value: Date.now() % 2 == 0,
        },
        'Repository Integrated': {
          tier: 'B',
          value: Date.now() % 2 == 0,
        },
        'Service Description Defined': {
          tier: 'B',
          value: Date.now() % 2 == 0,
        },
        'Service Language Defined': {
          tier: 'B',
          value: Date.now() % 2 == 0,
        },
        'Service Tier Defined': {
          tier: 'B',
          value: Date.now() % 2 == 0,
        },
        'Service Lifecycle Defined': {
          tier: 'B',
          value: Date.now() % 2 == 0,
        },
        'Service Framework Defined': {
          tier: 'B',
          value: Date.now() % 2 == 0,
        },
      },
      Security: {
        'Review Performed': {
          tier: 'A',
          value: Date.now() % 2 == 0,
        },
        'Gate Check': {
          tier: 'S',
          value: Date.now() % 2 == 0,
        },
      },
      Reliability: {
        'Incidents Tool': {
          tier: 'A',
          value: Date.now() % 2 == 0,
        },
        Alerts: {
          tier: 'A',
          value: Date.now() % 2 == 0,
        },
      },
      Observability: {
        'Metric Tool': {
          tier: 'A',
          value: Date.now() % 2 == 0,
        },
        'Backlog Tool': {
          tier: 'A',
          value: Date.now() % 2 == 0,
        },
        'Logging Tool': {
          tier: 'A',
          value: Date.now() % 2 == 0,
        },
      },
      Documentation: {
        'Has Readme': {
          tier: 'B',
          value: Date.now() % 2 == 0,
        },
        'Has Spec Doc': {
          tier: 'B',
          value: Date.now() % 2 == 0,
        },
        'Service Dependency Check': {
          tier: 'B',
          value: Date.now() % 2 == 0,
        },
        'ARC42 Doc': {
          tier: 'S',
          value: Date.now() % 2 == 0,
        },
      },
      Quality: {
        'Deployment Are Pushed': {
          tier: 'A',
          value: Date.now() % 2 == 0,
        },
        'Service Has Been Updated Recently': {
          tier: 'S',
          value: Date.now() % 2 == 0,
        },
      },
    };
    response.json(result);
  });
  router.use(errorHandler());
  return router;
}
