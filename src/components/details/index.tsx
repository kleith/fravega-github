import NextLink from 'next/link';
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Routes } from '@/constants/routes';
import { useFavorite } from '@/hooks/useFavorite';
import { Repositories } from '@/types/repos';
import { UserDetail } from '@/types/user';
import { Paper } from '../Paper';
import { FavoriteButton } from '../FavoriteButton';
import {
  Description,
  Dot,
  RepositoryContainer,
  RepositoryItem,
  RepositoryLanguage,
} from './Details.styles';
import { Link } from '../Link';

type DetailsProps = {
  user: UserDetail;
  repos: Repositories;
};

export const Details: React.FC<DetailsProps> = ({ user, repos }) => {
  const { favorites, toggleFavorite } = useFavorite();
  const isFavorite = favorites.some((fav) => fav.id === user.id);

  return (
    <>
      <Box my={2}>
        <Button
          LinkComponent={NextLink}
          color="primary"
          href={Routes.home}
          startIcon={<KeyboardArrowLeftIcon />}
        >
          Volver
        </Button>
      </Box>
      <Typography variant="h4" my={2}>
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
          <ListItem>
            <ListItemText primary="Nombre" secondary={user.name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Compañía" secondary={user.company} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Biografía" secondary={user.bio} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={user.email} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Blog"
              secondary={
                <Link href={user.blog} underline="hover" target="_blank" rel="noopener noreferrer">
                  {user.blog}
                </Link>
              }
            />
          </ListItem>
        </List>
      </Paper>

      <Typography variant="h4" mt={6} mb={2}>
        Repositorios
      </Typography>
      <RepositoryContainer>
        {repos.map((repo) => (
          <RepositoryItem key={repo.id}>
            <Typography variant="h6">
              <Link href={repo.html_url}>{repo.name}</Link>
            </Typography>
            <Description variant="body1" color="textSecondary">
              {repo.description}
            </Description>
            <Box sx={{ flexGrow: 1 }} />
            <RepositoryLanguage>
              {repo.language && (
                <>
                  <Dot language={repo.language} />
                  <Typography variant="body2" component="span">
                    {repo.language}
                  </Typography>
                </>
              )}
              {repo.stargazers_count > 0 && (
                <Tooltip title="Stars" placement="top" arrow>
                  <Typography variant="body2" component="span">
                    <StarBorderIcon />
                    {repo.stargazers_count}
                  </Typography>
                </Tooltip>
              )}
            </RepositoryLanguage>
          </RepositoryItem>
        ))}
      </RepositoryContainer>
    </>
  );
};
