export type Metadata = {
  category: Category;
  tier: Tier;
};

export enum Category {
  Documentation = 'Documentation',
  Observability = 'Observability',
  Readability = 'Readability',
  Reliability = 'Reliability',
  Security = 'Security',
  ServiceOwnership = 'Service Ownership',
}

export enum Tier {
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C',
}

export enum CheckId {
  OwnerCheck = 'ownerCheck',
  GroupOwnerCheck = 'groupOwnerCheck',
  TitleCheck = 'titleCheck',
  HasDescription = 'hasDescription',
  LifecycleCheck = 'lifecycleCheck',
  HasTags = 'hasTags',
  TechDocsCheck = 'techDocsCheck',
  HasSonarqubeIntegration = 'hasSonarqubeIntegration',
  IsSonarqubePassing = 'isSonarqubePassing',
  HasIncidentTool = 'hasIncidentTool',
  HasAlertTool = 'hasAlertTool',
  HasMetricsTool = 'hasMetricsTool',
  HasBacklogTool = 'hasBacklogTool',
  HasLoggingTool = 'hasLoggingTool',
}

export const checksMetadata: Record<
  CheckId,
  { category: Category; tier: Tier }
> = {
  [CheckId.OwnerCheck]: {
    category: Category.ServiceOwnership,
    tier: Tier.A,
  },
  [CheckId.GroupOwnerCheck]: {
    category: Category.ServiceOwnership,
    tier: Tier.A,
  },
  [CheckId.TitleCheck]: {
    category: Category.Readability,
    tier: Tier.B,
  },
  [CheckId.LifecycleCheck]: {
    category: Category.Readability,
    tier: Tier.B,
  },
  [CheckId.HasDescription]: {
    category: Category.Readability,
    tier: Tier.A,
  },
  [CheckId.HasTags]: {
    category: Category.Readability,
    tier: Tier.S,
  },
  [CheckId.TechDocsCheck]: {
    category: Category.Documentation,
    tier: Tier.S,
  },
  [CheckId.HasAlertTool]: {
    category: Category.Reliability,
    tier: Tier.S,
  },
  [CheckId.HasIncidentTool]: {
    category: Category.Reliability,
    tier: Tier.S,
  },
  [CheckId.HasMetricsTool]: {
    category: Category.Observability,
    tier: Tier.A,
  },
  [CheckId.HasLoggingTool]: {
    category: Category.Observability,
    tier: Tier.B,
  },
  [CheckId.HasBacklogTool]: {
    category: Category.Observability,
    tier: Tier.B,
  },
  [CheckId.IsSonarqubePassing]: {
    category: Category.Security,
    tier: Tier.A,
  },
  [CheckId.HasSonarqubeIntegration]: {
    category: Category.Security,
    tier: Tier.B,
  },
};
