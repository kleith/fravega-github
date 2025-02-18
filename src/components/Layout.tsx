import { Container } from '@mui/material';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <Container maxWidth="lg" component="main">
    {children}
  </Container>
);
