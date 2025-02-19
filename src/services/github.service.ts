import axios from '@/configs/axios';
import { Repositories } from '@/types/repos';
import { SearchUsers } from '@/types/search-users';
import { UserDetail } from '@/types/user';
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
    const response = await axios.get<UserDetail>(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user from GitHub:', error);
    throw error;
  }
};

export const getRepositories = async (userId: string) => {
  try {
    const response = await axios.get<Repositories>(`/users/${userId}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user repos from GitHub:', error);
    throw error;
  }
};
