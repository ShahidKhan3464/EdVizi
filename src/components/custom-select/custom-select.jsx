import React from 'react';
import { Icons } from 'assets';
import useSelect from './use-custom-select';

export const CustomSelect = ({
  name,
  label,
  value,
  options,
  onChange,
  placeholder = '',
  disabled = false,
  className = 'px-3 py-2.5 w-full capitalize text-base text-gray700 font-semibold rounded-md border border-solid border-gray300 bg-white ease-soft appearance-none outline-none transition-all focus:outline-none'
}) => {
  const { isOpen, setIsOpen, dropdownRef, dropdownPosition } = useSelect();

  return (
    <div className="w-full" ref={dropdownRef}>
      {label && (
        <label htmlFor={name} className="text-gray700 text-sm font-medium mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          id={name}
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          className={`flex-between gap-2 ${className} ${
            disabled && 'btn-primary-disabled'
          }`}
        >
          <span className={placeholder ? 'text-gray500' : ''}>
            {value || placeholder}
          </span>
          <div>
            <img alt="chevron-down" src={Icons.chevronDown} />
          </div>
        </button>
        {isOpen && (
          <ul
            role="listbox"
            className={`mt-2 z-20 w-full rounded-md overflow-y-auto max-h-[175px] absolute shadow-lg bg-white ring-1 ring-black ring-opacity-5  ${
              dropdownPosition === 'top' ? 'bottom-13' : 'top-13'
            }`}
          >
            {options?.map((option, index) => (
              <li
                key={index}
                tabIndex={0}
                role="option"
                aria-selected={value === option.value}
                className="px-4 py-2 text-gray700 font-medium cursor-pointer hover:bg-[#f9f9f8]"
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
