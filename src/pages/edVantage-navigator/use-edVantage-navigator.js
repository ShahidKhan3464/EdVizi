import { useState } from 'react';

function useEdvantageNavigator() {
  const [searchValue, setSearchValue] = useState('');

  return {
    searchValue,
    setSearchValue
  };
}

export default useEdvantageNavigator;
