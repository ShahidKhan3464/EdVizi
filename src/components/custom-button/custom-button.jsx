import { CustomLoader } from 'components/custom-loader/custom-loader';
import React from 'react';

export const CustomButton = ({
  icon,
  onClick,
  children,
  text = '',
  className = '',
  type = 'button',
  disabled = false,
  isLoading = false,
  iconPosition = 'before',
  ...others
}) => {
  const renderContent = () => (
    <>
      {iconPosition === 'before' && icon}
      {isLoading ? <CustomLoader circleColor="black" /> : text}
      {iconPosition === 'after' && icon}
    </>
  );

  return (
    <button
      {...others}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${disabled && 'btn-primary-disabled'}`}
    >
      {renderContent()}
      {children}
    </button>
  );
};
