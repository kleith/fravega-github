import { UserDetail } from '@/types/user';
import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import { Routes } from '@/constants/routes';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Paper } from '../Paper';

type DetailsProps = {
  user: UserDetail;
};

export const Details: React.FC<DetailsProps> = ({ user }) => {
  return (
    <>
      <Box py={2}>
        <Button
          LinkComponent={Link}
          color="primary"
          href={Routes.home}
          startIcon={<KeyboardArrowLeftIcon />}
        >
          Volver
        </Button>
      </Box>
      <Typography variant="h4" py={2}>
        Github detalle del usuario
      </Typography>

      <Paper>
        <List>
          <ListItem
            secondaryAction={
              <Button
                variant="contained"
                color="secondary"
                LinkComponent={Link}
                href={user.html_url}
                startIcon={<GitHubIcon />}
              >
                Ver en github
              </Button>
            }
          >
            <ListItemAvatar>
              <Avatar alt={user.login} src={user.avatar_url} />
            </ListItemAvatar>
            <ListItemText primary="Usuario" secondary={user.login} />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Nombre" secondary={user.name} />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Compañía" secondary={user.company} />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Biografía" secondary={user.bio} />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Email" secondary={user.email} />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Blog" secondary={user.blog} />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Repositorios" secondary={user.repos_url} />
          </ListItem>
          {/* <Divider component="li" /> */}
        </List>
      </Paper>
    </>
  );
};
