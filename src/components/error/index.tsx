import { Routes } from '@/constants/routes';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

type ErrorProps = {
  statusCode?: number;
};

export const Error: React.FC<ErrorProps> = ({ statusCode }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        placeContent: 'center',
        minHeight: 'calc(100vh - 32px)',
        textAlign: 'center',
      }}
    >
      <Box>
        <Typography variant="h4" mb={1}>
          {statusCode ? `Error ${statusCode}` : 'Error en el cliente'}
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={4}>
          {statusCode === 404
            ? 'Lo sentimos, la página no se encuentra.'
            : 'Ocurrió un error inesperado.'}
        </Typography>

        <Button LinkComponent={Link} variant="contained" color="secondary" href={Routes.home}>
          Volver al inicio
        </Button>
      </Box>
    </Box>
  );
};
