import { createContext, useState, ReactNode } from 'react';

type Item = {
  id: number;
  name: string;
};

export type FavoritesContextType = {
  favorites: Item[];
  toggleFavorite: (item: Item) => void;
};

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

type FavoritesProviderProps = {
  children: ReactNode;
};

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Item[]>([]);

  const toggleFavorite = (item: Item) => {
    setFavorites((prev) => {
      const isFavorite = prev.some((fav) => fav.id === item.id);
      if (isFavorite) {
        return prev.filter((fav) => fav.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
