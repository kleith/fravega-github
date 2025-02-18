import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/services/github.service';

export const useHome = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  return { users, error, isLoading };
};
