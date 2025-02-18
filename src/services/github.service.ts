import axios from '@/configs/axios';
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
