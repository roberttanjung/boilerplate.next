import { useRouter } from 'next/router';
import { useLayoutEffect, useCallback } from 'react';
import { getCookie } from 'react-use-cookie';

const useAuth = () => {
  const { push: redirectTo } = useRouter();
  const token = getCookie(process.env.TOKEN_NAME!);

  const onCheck = useCallback(() => {
    if (!token) redirectTo('/login');
  }, [redirectTo, token]);

  useLayoutEffect(() => {
    onCheck();
  }, [onCheck]);
};

export default useAuth;
