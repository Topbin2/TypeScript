export interface User {
  user: UserInfo;
}

export interface IUserData {
  name: string;
  email: string;
  lastName: string;
  location: string;
}

export interface IUserState {
  isLoading: boolean;
  isSidebarOpen: boolean;
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
