import * as React from 'react';
import Container from '@mui/material/Container';
import MiniDrawer from '../components/mini-drawer'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <MiniDrawer />
    </Container>
  );
}