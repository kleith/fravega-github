import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton, Tooltip } from '@mui/material';

type FavoriteButtonProps = {
  isFavorite: boolean;
  onClick: () => void;
  align?: 'left' | 'right';
};

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ align, isFavorite, onClick }) => (
  <Tooltip placement={align} title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}>
    <IconButton color="error" onClick={onClick}>
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  </Tooltip>
);
