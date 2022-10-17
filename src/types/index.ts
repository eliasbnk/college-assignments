export type AuthContextType = {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: any | null;
  handleSignIn: () => Promise<void>;
  handleSignOut: () => Promise<void>;
};
