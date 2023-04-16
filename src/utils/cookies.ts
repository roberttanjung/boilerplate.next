import { setCookie, getCookie } from 'react-use-cookie';

const onSetCookie = ({ key, value }: { key: string; value: string }) => {
  setCookie(key, value);
};

const onGetCookie = (key: string) => getCookie(key) || '';

export { onSetCookie, onGetCookie };
