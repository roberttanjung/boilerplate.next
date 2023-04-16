import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { onSetCookie, onGetCookie } from '@/utils/cookies';

const useTheme = () => {
  const { reload } = useRouter();

  // group: state
  const [stateTheme, setStateTheme] = useState<string | 'bumblebee' | 'dark'>('bumblebee');

  // group: action
  const onChangeTheme = (theme: string): void => {
    onSetCookie({ key: 'theme', value: theme });
    setStateTheme(theme);
    reload();
  };

  // group: setup
  const setup = (): void => {
    if (onGetCookie('theme')) setStateTheme(onGetCookie('theme'));
  };

  // group: mounted
  useEffect(() => {
    setup();
  }, []);

  return {
    stateTheme,
    onChangeTheme,
  };
};

export default useTheme;
