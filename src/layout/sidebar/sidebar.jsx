import React from 'react';
import { Images } from 'assets';
import useSidebar from './use-sidebar';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const { menuItems } = useSidebar();

  return (
    <aside className="bg-gray900 w-[264px] p-4">
      <div className="block m-auto mt-4 mb-8 w-[150px] h-[42px] max-md:my-2">
        <img src={Images.logo} alt="logo" className="w-full h-full" />
      </div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.text} className="mb-4">
              <Link
                href={item.path}
                className={`p-2 gap-3 rounded-lg flex items-center ${
                  item.isActive ? 'text-gray700 bg-greenNormal' : 'text-gray200'
                }`}
              >
                <img
                  alt="icon"
                  src={item.isActive ? item.activeIcon : item.icon}
                />
                <span className="text-sm font-semibold">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
