export type AuthContextType = {
  isLoggedIn: boolean;
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any | null;
  handleSignIn: () => Promise<void>;
  handleSignOut: () => Promise<void>;
};
