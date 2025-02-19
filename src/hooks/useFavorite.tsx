import { useContext } from 'react';
import { FavoritesContext, FavoritesContextType } from '@/context/Favorite';

export const useFavorite = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
};
