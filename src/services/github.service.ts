import axios from '@/configs/axios';
import { SearchUsers } from '@/types/search-users';
import { Users } from '@/types/users';

export const getUsers = async () => {
  try {
    const response = await axios.get<Users>('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users from GitHub:', error);
    throw error;
  }
};

export const findUsers = async (search: string) => {
  try {
    const response = await axios.get<SearchUsers>(`/search/users?q=${search}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users from GitHub:', error);
    throw error;
  }
};

export const getUser = async (userId: string) => {
  try {
    const response = await axios.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user from GitHub:', error);
    throw error;
  }
};
