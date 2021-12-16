export interface UserCard {
  avatar: string;
  name: string;
}

export interface UsersListProps {
  status: string;
  users: UserCard[];
}
