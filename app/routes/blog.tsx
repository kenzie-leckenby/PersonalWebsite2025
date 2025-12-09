import { Outlet } from '@remix-run/react';
import { Container } from '@mui/material';

export default function BlogLayout() {
  return (
    <Container maxWidth='xl' disableGutters>
      <Outlet />
    </Container>
  );
}
