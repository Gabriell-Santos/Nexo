import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConnection";

interface ProviderProps {
  children: React.ReactNode;
}

interface AuthContextData {
  userAuth: userProps | null;
  loadingAuth: boolean;
}

type userProps = {
  id: string;
  email: string | null;
  name: string | null;
  date: Date | null;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<userProps | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  // Verifica se o usuário está logado ou não
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          id: user.uid,
          email: user?.email,
          name: user?.displayName,
          date: user?.metadata?.creationTime
            ? new Date(user.metadata.creationTime)
            : null,
        });
      } else {
        setUser(null);
      }
      setLoadingAuth(false);
    });
    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ userAuth: user, loadingAuth: loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
