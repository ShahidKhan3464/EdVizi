import { useState } from 'react';

function useInput() {
  const [showPassword, setShowPassword] = useState(false);

  return {
    showPassword,
    setShowPassword
  };
}

export default useInput;
