'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import useSidebar from './use-sidebar.hook';

export default function MobileSidebar({ isOpen, setIsOpen }) {
  const { menuItems, handleLogout } = useSidebar();

  if (!isOpen) return null;

  return (
    <React.Fragment>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed inset-0 bg-black opacity-[60%] z-[2]"
      ></div>
      <div className="w-[254px] bg-white fixed inset-0 z-[100] transition duration-1000 ease-in-out">
        <div className="my-5 h-[46px]">
          <Image
            alt="dashboard"
            src={Icons.dashboard}
            className="w-full h-full"
          />
        </div>
        <aside className="p-4 gap-5 w-[254px] h-[calc(100vh_-_66px)] flex flex-col justify-between">
          <ul>
            {menuItems.slice(0, 4).map((item) => (
              <li key={item.text} className="mb-4">
                <div onClick={() => setIsOpen(false)}>
                  <Link
                    href={item.path}
                    className={`p-3 gap-3 rounded-md flex items-center ${
                      item.isActive ? 'text-white bg-blue600' : 'text-gray600'
                    }`}
                  >
                    <Image
                      alt="icon"
                      src={item.isActive ? item.activeIcon : item.icon}
                    />
                    <span className="text-lg font-medium">{item.text}</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <ul>
            {menuItems.slice(4).map((item) => (
              <li
                key={item.text}
                className="mb-4"
                onClick={() => (item.text === 'Logout' ? handleLogout() : null)}
              >
                <div
                  onClick={() =>
                    item.text === 'Logout' ? handleLogout() : setIsOpen(false)
                  }
                >
                  <Link
                    href={item.path || ''}
                    className={`p-3 gap-3 rounded-md flex items-center ${
                      item.isActive ? 'text-white bg-blue600' : 'text-gray600'
                    }`}
                  >
                    <Image
                      alt="icon"
                      src={item.isActive ? item.activeIcon : item.icon}
                    />
                    <span className="text-lg font-medium">{item.text}</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </React.Fragment>
  );
}
