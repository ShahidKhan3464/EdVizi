import { useEffect, useState } from 'react';

function useHeader() {
  const LAPTOP_SCREEN = 1024;
  const [width, setWidth] = useState(0);
  const [selectedValue, setSelectedValue] = useState('sales');

  const options = [
    { label: 'Admin', value: 'admin' },
    { label: 'Sales', value: 'sales' },
    { label: 'Customer Success', value: 'customer success' }
  ]

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, selectedValue, setSelectedValue, options, LAPTOP_SCREEN };
}

export default useHeader;
