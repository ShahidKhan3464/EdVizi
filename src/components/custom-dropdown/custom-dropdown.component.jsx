import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import useDropdown from './use-custom-dropdown.hook';

export const CustomDropdown = ({ name, value, options, onChange }) => {
  const { isOpen, setIsOpen, dropdownRef, dropdownPosition } = useDropdown();

  return (
    <div className="w-full max-w-[156px]" ref={dropdownRef}>
      <div className="relative">
        <button
          id={name}
          type="button"
          onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          className={
            'px-[18px] h-11 w-full capitalize flex-center gap-2 bg-white rounded-xl border border-solid border-[#D0D5DD]'
          }
        >
          <div>
            <Image
              priority
              width={20}
              height={20}
              alt="filter-lines"
              src={Icons.filterLines}
            />
          </div>
          <span className={'text-base text-gray600 font-semibold'}>
            {value}
          </span>
          <div>
            <Image
              priority
              width={20}
              height={20}
              alt="Dropdown Arrow"
              src={Icons.arrowDown}
            />
          </div>
        </button>
        {isOpen && (
          <ul
            role="listbox"
            className={`mt-1 p-2.5 z-20 w-full rounded-md overflow-y-auto max-h-[175px] absolute bg-white shadow-[0px_2px_4px_0px_#0000001A] max-sm:p-1 ${
              dropdownPosition === 'top' ? 'bottom-13' : 'top-13'
            }`}
          >
            {options?.map((option, index) => (
              <li
                key={index}
                tabIndex={0}
                className="p-2.5 text-sm text-gray600 font-medium cursor-pointer hover:bg-[#E1F4FD]"
                onClick={() => {
                  onChange(name, option.value);
                  setIsOpen((prevIsOpen) => !prevIsOpen);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
