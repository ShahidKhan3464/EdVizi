import React from 'react';
import { Icons } from 'assets';

export const CustomCheckbox = ({
  label,
  checked,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex-center gap-1 cursor-pointer"
    >
      <img
        alt="checkbox"
        className={`${!checked ? 'w-4 h-4' : ''}`}
        src={checked ? Icons.check : Icons.unCheck}
      />
      <span className={`${className} cursor-pointer`}>{label}</span>
    </div>
  );
};
