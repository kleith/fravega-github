import Link from 'next/link';
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
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Routes } from '@/constants/routes';
import { useFavorite } from '@/hooks/useFavorite';
import { UserDetail } from '@/types/user';
import { Paper } from '../Paper';
import { FavoriteButton } from '../FavoriteButton';

type DetailsProps = {
  user: UserDetail;
};

export const Details: React.FC<DetailsProps> = ({ user }) => {
  const { favorites, toggleFavorite } = useFavorite();
  const isFavorite = favorites.some((fav) => fav.id === user.id);

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
                <FavoriteButton
                  align="left"
                  isFavorite={isFavorite}
                  onClick={() => toggleFavorite({ id: user.id, name: user.login })}
                />
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
