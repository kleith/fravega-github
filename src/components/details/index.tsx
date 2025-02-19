import Link from 'next/link';
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Routes } from '@/constants/routes';
import { UserDetail } from '@/types/user';
import { Paper } from '../Paper';
import { useState } from 'react';

type DetailsProps = {
  user: UserDetail;
};

export const Details: React.FC<DetailsProps> = ({ user }) => {
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleFavoriteToggle = (id: number) => {
    setFavorite((prevFavorite) => !prevFavorite);
    console.log(id);
  };

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
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <Tooltip
                  placement="left"
                  title={favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                >
                  <IconButton color="error" onClick={() => handleFavoriteToggle(user.id)}>
                    {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                </Tooltip>
                <Button
                  variant="contained"
                  color="secondary"
                  LinkComponent={Link}
                  href={user.html_url}
                  startIcon={<GitHubIcon />}
                >
                  Ver en github
                </Button>
              </Box>
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
        </List>
      </Paper>
    </>
  );
};
