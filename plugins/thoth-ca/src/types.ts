Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@ivamuno 
backstage
/
backstage
Public
Fork your own copy of backstage/backstage
Code
Issues
368
Pull requests
87
Discussions
Actions
Projects
1
Security
9
More
backstage/plugins/code-coverage/src/types.ts /
@freben
freben deprecate EntityName, introduce CompoundEntityRef
…
Latest commit 36aa630 on Mar 2, 2022
 History
 1 contributor
 72 lines (64 sloc)  1.57 KB

/*
 * Copyright 2021 The Backstage Authors
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

import { CompoundEntityRef } from '@backstage/catalog-model';

export type JsonCodeCoverage = {
  metadata: CoverageMetadata;
  entity: CompoundEntityRef;
  files: Array<FileEntry>;
};

export type JsonCoverageHistory = {
  entity: CompoundEntityRef;
  history: Array<AggregateCoverage>;
};

export type CoverageHistory = {
  line: {
    available: number;
    covered: number;
  };
  branch: BranchHit;
};

export type CoverageMetadata = {
  vcs: {
    type: string;
    location: string;
  };
  generationTime: number;
};

export type BranchHit = {
  covered: number;
  missed: number;
  available: number;
};

export type FileEntry = {
  filename: string;
  lineHits: Record<number, number>;
  branchHits: Record<number, BranchHit>;
};

export type AggregateCoverage = {
  timestamp: number;
  line: {
    available: number;
    covered: number;
    missed: number;
    percentage: number;
  };
  branch: {
    available: number;
    covered: number;
    missed: number;
    percentage: number;
  };
};
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
backstage/types.ts at master · backstage/backstage