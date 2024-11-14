import React from 'react';
import useSearchField from './use-search-field';
import { Icons } from 'assets';

export const CustomSearchField = ({ handleSearchQueryChange }) => {
  const { inputRef, handleSearch } = useSearchField({
    handleSearchQueryChange
  });

  return (
    <div className="p-3 w-full rounded-md bg-white shadow-[0px_1px_2px_0px_#1018280D] border border-solid border-[#D0D5DD]">
      <div className="flex gap-2">
        <img src={Icons.search} alt="search" />
        <input
          type="text"
          ref={inputRef}
          placeholder="Search"
          onChange={handleSearch}
          className="w-full h-full text-[#667085] outline-none border-[none] bg-tranparent"
        />
      </div>
    </div>
  );
};
