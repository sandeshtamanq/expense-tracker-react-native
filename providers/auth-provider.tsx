import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "../lib/supabase.config";
import { Session } from "@supabase/supabase-js";

type AuthData = {
  session: Session | null;
  loading: boolean;
  user: any;
};

const AuthContext = createContext<AuthData>({
  session: null,
  loading: true,
  user: null,
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
      setUser(data.session?.user);
    };
    fetchSession();
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ session, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
