import { validateToken } from '@services/auth';
import AuthContext from '@contexts/auth';
import { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { HOME } from '@router/paths';
import { removeToken, getToken } from '@utils/token';

function Auth({ children }: any) {
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    validateToken(getToken() as string)
      .then()
      .catch((error) => {
        if (setAuth) {
          removeToken();
          setAuth(false);
        }
        toast.error(error?.message);
      });
  }, []);

  if (auth) {
    return children;
  }

  return <Navigate to={HOME} />;
}

export default Auth;
