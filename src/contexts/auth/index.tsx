export const a = 1;
// import { useState, useEffect, createContext, useContext } from 'react';
// import type { FC, ReactNode } from 'react';
// import { authProvider, fire } from 'db';
// import { AuthContextType } from 'types';

// export const AuthContext = createContext<AuthContextType>({
//   isLoggedIn: false,
//   isLoading: false,
//   user: null,
//   handleSignIn: {} as any,
//   handleSignOut: {} as any
// });

// export const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState<AuthContextType['isLoggedIn']>(false);
//   const [isLoading, setIsLoading] = useState<AuthContextType['isLoading']>(false);
//   const [user, setUser] = useState<AuthContextType['user']>(null);

//   const readSession = () => {
//     try {
//       setIsLoading(true);
//       fire.auth().onAuthStateChanged((user) => {
//         if (!user) {
//           setIsLoggedIn(false);
//           return;
//         }
//         setIsLoggedIn(true);
//         setUser(user);
//       });
//     } catch ({ message }) {
//       throw new Error(`Error @ readSession, Error:${message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSignOut: AuthContextType['handleSignOut'] = async () => {
//     try {
//       await fire.auth().signOut();
//       window.location.reload();
//     } catch ({ message }) {
//       throw new Error(`Error @ handleSignOut, Error:${message}`);
//     }
//   };

//   const handleSignIn: AuthContextType['handleSignIn'] = async () => {
//     try {
//       await fire.auth().signInWithRedirect(authProvider);
//     } catch ({ message }) {
//       throw new Error(`Error @ handleSignIn, Error:${message}`);
//     }
//   };

//   useEffect(() => {
//     readSession();
//   }, []);
//   const context = {
//     isLoggedIn,
//     isLoading,
//     user,
//     handleSignIn,
//     handleSignOut
//   };
//   return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
// };

// export const useAuthContext = () => {
//   const context = useContext(AuthContext);
//   return context;
// };
