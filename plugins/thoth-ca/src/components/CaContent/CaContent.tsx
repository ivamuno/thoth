import React from 'react';
import { Grid } from '@material-ui/core';
import { CaReportComponent } from '../CaReportComponent';

export const CaContent = () => (
  <Grid container spacing={3} direction="column">
    <Grid item>
      <CaReportComponent />
    </Grid>
  </Grid>
);
