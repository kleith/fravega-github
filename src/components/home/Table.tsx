import { useState } from 'react';
import Link from 'next/link';
import {
  Table as TableMui,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Avatar,
  Tooltip,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { User } from '@/types/users';
import dynamic from 'next/dynamic';
import { TableRowSkeleton } from './TableRowSkeleton';
import { Routes } from '@/constants/routes';

type TableProps = {
  rows?: User[];
  isLoading: boolean;
};

const DynamicTableRowSkeleton = dynamic(() => Promise.resolve(TableRowSkeleton), { ssr: false });

export const Table: React.FC<TableProps> = ({ rows, isLoading = false }) => {
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});

  const handleFavoriteToggle = (id: number) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
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
                  <Tooltip
                    placement="right"
                    title={favorites[row.id] ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                  >
                    <IconButton color="error" onClick={() => handleFavoriteToggle(row.id)}>
                      {favorites[row.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </TableMui>
  );
};
