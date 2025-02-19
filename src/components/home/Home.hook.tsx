import { useCallback, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useDebounce } from '@/hooks/useDebounce';
import { findUsers, getUsers } from '@/services/github.service';
import { UserItem } from '@/types/search-users';

export const useHome = () => {
  const [usersFind, setUsersFind] = useState<UserItem[]>([]);
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
  const { mutateAsync, isPending } = useMutation({
    mutationFn: findUsers,
  });
  const callback = useCallback(
    async (searchValue: string) => {
      if (searchValue === '') {
        setUsersFind([]);
        return;
      }

      try {
        const data = await mutateAsync(searchValue);

        setUsersFind(data.items);
      } catch (error) {
        console.error('Error fetching users from GitHub:', error);
        throw error;
      }
    },
    [mutateAsync],
  );
  const setDebounceValue = useDebounce<string>(callback, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = event.target.value.replace(/[^a-zA-Z0-9]/g, '');
    if (sanitizedValue !== event.target.value) {
      event.target.value = sanitizedValue;
    }

    setDebounceValue(sanitizedValue);
  };

  return {
    users: usersFind.length ? usersFind : users,
    error,
    isLoading: isLoading || isPending,
    handleChange,
  };
};
