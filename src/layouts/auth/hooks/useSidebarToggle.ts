import { useState, useCallback } from 'react';

const useSidebarToggle = () => {
  // group: state
  const [stateIsToggle, setStateIsToggle] = useState<boolean>(false);

  // group: action
  const onSidebarToggle = (): void => {
    setStateIsToggle(!stateIsToggle);
  };

  const onSidebarClose = useCallback((): void => {
    setStateIsToggle(false);
  }, [setStateIsToggle]);

  return {
    stateIsToggle,
    onSidebarToggle,
    onSidebarClose,
  };
};

export default useSidebarToggle;
