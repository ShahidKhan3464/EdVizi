import React from 'react';
import { CustomLoader } from 'components/custom-loader/custom-loader';

export const CustomTable = ({
  data,
  columns,
  isLoading,
  totalRecords,
  renderCellContent
}) => {
  const noResultsFound = !totalRecords;

  return (
    <div className="relative rounded-xl overflow-x-auto shadow-[0px_1px_2px_0px_#1018280D] border border-solid border-[#EAECF0]">
      <table className="w-full text-left whitespace-nowrap">
        <thead className="text-xs text-[#475467] text-left bg-[#F9FAFB]">
          <tr>
            {columns.map((column, index) => (
              <th
                scope="col"
                key={index}
                className="px-6 py-3 font-medium max-sm:px-3"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="p-8">
                <CustomLoader circleColor="black" />
              </td>
            </tr>
          ) : noResultsFound ? (
            <tr>
              <td colSpan={columns.length} className="p-10">
                <p className="flex-center text-lg text-gray600 font-medium">
                  No record found
                </p>
              </td>
            </tr>
          ) : (
            data.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className="text-sm text-gray600 font-medium text-left border-y border-solid border-[#EAECF0]"
              >
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex} className="p-6 max-sm:p-3">
                    {renderCellContent(item, column, rowIndex + 1)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
