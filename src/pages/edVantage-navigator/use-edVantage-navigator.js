import { useState } from 'react';

const columnsData = [
  { id: 1, title: 'Pending', status: 'pending', color: '#007bff' },
  { id: 2, title: 'In Progress', status: 'in-progress', color: '#28a745' },
  { id: 3, title: 'At Risk', status: 'at-risk', color: '#dc3545' }
];

function useEdvantageNavigator() {
  const [searchQuery, setSearchQuery] = useState('');

  return {
    setSearchQuery
  };
}

export default useEdvantageNavigator;
