import React from 'react';
import { Icons, Images } from 'assets';
import useSidebar from './use-sidebar';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const { pathname, menuItems, expanded, handleToggle } = useSidebar();

  return (
    <aside className="bg-gray900 w-[264px] p-4">
      <div className="block m-auto mt-4 mb-8 w-[150px] h-[42px] max-md:my-2">
        <img src={Images.logo} alt="logo" className="w-full h-full" />
      </div>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={item.text} className="mb-4">
              <div
                onClick={() => expanded !== index && handleToggle(item, index)}
                className={`p-2 gap-3 rounded-lg flex items-center cursor-pointer ${
                  item.isActive
                    ? 'text-gray700 bg-greenNormal font-semibold'
                    : 'text-gray200'
                }`}
              >
                <img
                  alt="icon"
                  src={item.isActive ? item.activeIcon : item.icon}
                />
                <span className="text-sm">{item.text}</span>
                {item.children.length > 0 && (
                  <img
                    alt="arrow"
                    className="ml-auto"
                    src={
                      expanded === index
                        ? Icons.blackChevronUp
                        : Icons.whiteChevronDown
                    }
                  />
                )}
              </div>

              {/* Render sub-items if the menu is expanded */}
              {expanded === index && item.children.length > 0 && (
                <ul className="mt-2 ml-5">
                  {item.children.map((child) => (
                    <li key={child.text} className="flex !items-baseline">
                      <img src={Icons.accordionLine} alt="accordion-line" />
                      <Link
                        to={child.path}
                        className={`block p-2 rounded-lg text-xs ${
                          pathname === child.path
                            ? 'text-gray700'
                            : 'text-gray200'
                        }`}
                      >
                        {child.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
