import React from 'react';
import useHeader from './use-header';
import { CustomSelect } from 'components/custom-select/custom-select';
import { Icons } from 'assets';

export default function Header() {
  const { selectedValue, setSelectedValue, options, width, LAPTOP_SCREEN } =
    useHeader();

  return (
    <div className="px-6 py-5 bg-white flex-between border-b-[#E0E0E0] border-b border-solid">
      <h2 className="text-2xl text-black font-semibold">Interactive Map</h2>
      <div className="flex-between gap-4">
        <div className="w-[220px]">
          <CustomSelect
            options={options}
            value={selectedValue}
            name="allow_extra_floors"
            onChange={(name, value) => setSelectedValue(value)}
          />
        </div>
        <img src={Icons.bell} alt="bell" />
        <img src={Icons.avatar} alt="avatar" />
      </div>
    </div>
  );
}
