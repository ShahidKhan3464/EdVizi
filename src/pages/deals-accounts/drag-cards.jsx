import React from 'react';
import { Icons } from 'assets';

export default function DragCards({
  card,
  onDragEnd,
  onDragOver,
  onDragStart
}) {
  return (
    <div
      draggable
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      className={`p-4 mb-2 bg-white rounded-xl cursor-pointer border ${
        card.status === 'At Risk' ? 'border-red-500' : 'border-green-500'
      }`}
    >
      <span
        className={`px-3 py-1 text-xs font-medium rounded-full bg-[#ECFDF3] border border-solid border-[#ABEFC6] ${
          card.status === 'In Progress'
            ? 'text-green-500'
            : card.status === 'At Risk'
            ? 'text-red-500'
            : 'text-blue-500'
        }`}
      >
        {card.status}
      </span>
      <div className="mt-3 pb-3 flex-between border-b border-solid border-[#EEEEEE]">
        <h6 className="text-gray900 font-medium">{card.title || ''}</h6>
        <img src={Icons.blackChevronDown} alt="arrow" />
      </div>
      <p className="mt-2 text-sm text-gray700 font-semibold">
        Amount:{' '}
        <span className="text-[#455266] font-normal">{card.amount}</span>
      </p>
      <p className="mt-2 text-sm text-gray700 font-semibold">
        Due Date:{' '}
        <span className="text-[#455266] font-normal">{card.dueDate}</span>
      </p>
    </div>
  );
}
