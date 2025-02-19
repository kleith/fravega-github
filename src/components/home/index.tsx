import {
  Box,
  Divider,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Paper,
  TableContainer,
  Toolbar,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Table } from './Table';
import { useHome } from './Home.hook';

export const Home = () => {
  const { users, isLoading, handleChange } = useHome();

  return (
    <>
      <Typography variant="h4" py={2}>
        Github
      </Typography>
      <TableContainer component={Paper}>
        <Toolbar>
          <Typography variant="h6" id="tableTitle" component="div">
            Usuarios
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <FormControl variant="outlined" size="small">
            <OutlinedInput
              type="text"
              id="user-search"
              placeholder="Buscar usuario"
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Toolbar>
        <Divider />
        <Table rows={users} isLoading={isLoading} />
      </TableContainer>
    </>
  );
};
