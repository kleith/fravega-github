import { User } from './users';

export interface UserItem extends User {
  score: number;
}

export interface SearchUsers {
  total_count: number;
  incomplete_results: boolean;
  items: UserItem[];
}
