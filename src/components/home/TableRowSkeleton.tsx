import { Box, Skeleton, TableCell, TableRow } from '@mui/material';

export const TableRowSkeleton = () => {
  const widths = [60, 70, 80, 90, 100, 110];
  const randomWidth = widths[Math.floor(Math.random() * widths.length)];

  return (
    <TableRow>
      <TableCell>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={randomWidth} />
      </TableCell>
      <TableCell>
        <Skeleton variant="circular" width={40} height={40} />
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={90} />
          <Skeleton variant="circular" width={24} height={24} />
        </Box>
      </TableCell>
    </TableRow>
  );
};
