type UserStateValue = {
  username: string;
  isLoggedIn: boolean;
};

type UserState = {
  value: UserStateValue;
};

export type { UserStateValue, UserState };
