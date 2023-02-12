import { useCallback, useState } from 'react';

function useHomeViewModel() {
  const [counter, setCounter] = useState(0);
  const handleClick = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  return {
    handleClick,
    counter,
  };
}

export default useHomeViewModel;
