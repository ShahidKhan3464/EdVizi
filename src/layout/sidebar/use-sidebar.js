import { Icons } from 'assets';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (item, index) => {
    setExpanded(expanded === index ? null : index);
    navigate(item.path);
  };

  const menuItems = [
    {
      children: [],
      icon: Icons.marker,
      text: 'EdVantage Navigator',
      path: '/edVantage-navigator',
      activeIcon: Icons.markerActive,
      isActive: pathname === '/edVantage-navigator'
    },
    {
      icon: Icons.users,
      path: '/deals-accounts',
      text: 'Deals & Accounts',
      activeIcon: Icons.usersActive,
      isActive:
        pathname === '/deals-accounts' || pathname.includes('/deals-accounts/'),
      children: [
        {
          text: 'Performance Simulator',
          path: '/deals-accounts/performance-simulator'
        }
      ]
    }
  ];

  return { pathname, menuItems, expanded, handleToggle };
}

export default useSidebar;
