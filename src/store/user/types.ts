type UserStateValue = {
  username: string;
  isLoggedIn: boolean;
  token: string | null;
};

type UserState = {
  value: UserStateValue;
};

export type { UserStateValue, UserState };
