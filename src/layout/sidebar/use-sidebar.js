import { Icons } from 'assets';
import { useLocation } from 'react-router-dom';

function useSidebar() {
  const location = useLocation();
  const pathname = location.pathname

  const menuItems = [
    {
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
      isActive: pathname === 'deals-accounts'
    },
  ];

  return { menuItems };
}

export default useSidebar;
