import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#efefef',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTableCell: {
      variants: [
        {
          props: { variant: 'head' },
          style: {
            color: '#505059',
            backgroundColor: '#f7f7f7',
            padding: '0.75rem 1rem',
          },
        },
      ],
    },
  },
});

export default theme;
