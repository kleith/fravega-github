import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  Table as TableMui,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Avatar,
} from '@mui/material';
import { Routes } from '@/constants/routes';
import { useFavorite } from '@/hooks/useFavorite';
import { User } from '@/types/users';
import { TableRowSkeleton } from './TableRowSkeleton';
import { FavoriteButton } from '../FavoriteButton';

type TableProps = {
  rows?: User[];
  isLoading: boolean;
};

const DynamicTableRowSkeleton = dynamic(() => Promise.resolve(TableRowSkeleton), { ssr: false });

export const Table: React.FC<TableProps> = ({ rows, isLoading = false }) => {
  const { favorites, toggleFavorite } = useFavorite();

  const getIsFavorite = (id: number) => {
    return favorites.some((fav) => fav.id === id);
  };

  return (
    <TableMui>
      <TableHead>
        <TableRow>
          <TableCell>Usuario</TableCell>
          <TableCell>Avatar</TableCell>
          <TableCell sx={{ width: 180 }} align="right">
            Acción
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => <DynamicTableRowSkeleton key={index} />)
          : rows?.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.login}</TableCell>
                <TableCell>
                  <Avatar alt={row.login} src={row.avatar_url} />
                </TableCell>
                <TableCell align="right">
                  <Button
                    color="primary"
                    variant="text"
                    LinkComponent={Link}
                    href={`${Routes.details}/${row.login}`}
                  >
                    Ver detalle
                  </Button>
                  <FavoriteButton
                    align="right"
                    isFavorite={getIsFavorite(row.id)}
                    onClick={() => toggleFavorite({ id: row.id, name: row.login })}
                  />
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </TableMui>
  );
};
