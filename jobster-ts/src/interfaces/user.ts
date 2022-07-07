export interface IUserState {
  isLoading: boolean;
  user: UserInfo | null;
}

export interface UserState {
  name?: string;
  email: string;
  password: string;
}

export interface UserInfo {
  email: string;
  lastName: string;
  location: string;
  name: string;
  token: string;
}