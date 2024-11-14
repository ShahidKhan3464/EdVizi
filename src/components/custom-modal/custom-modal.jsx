import React from 'react';
import { Icons } from 'assets';

export const CustomModal = ({
  title,
  isOpen,
  onClose,
  children,
  className
}) => {
  if (!isOpen) return null;

  return (
    <React.Fragment>
      <div
        onClick={() => onClose && onClose()}
        className="fixed inset-0 bg-black opacity-[70%] z-[2]"
      ></div>
      <div className="fixed flex-center inset-0 z-[100]">
        <div
          className={`p-6 m-3 bg-white rounded-[10px] shadow-[-100px_100px_150px_0px_#3440541F] max-sm:p-3 ${className}`}
        >
          <div className="sticky top-0">
            <div className="flex-between">
              {title && (
                <h2 className="text-xl text-gray700 font-semibold">{title}</h2>
              )}
              <img
                alt="cancel"
                src={Icons.xClose}
                className="cursor-pointer ml-auto"
                onClick={() => onClose && onClose()}
              />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
