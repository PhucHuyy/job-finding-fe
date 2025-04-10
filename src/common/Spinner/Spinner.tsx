import React from 'react';

const Spinner = ({ size = 'medium', color = '#000000' }) => {
  const sizeClasses =
    size === 'small'
      ? 'w-5 h-5 border-2'
      : size === 'large'
      ? 'w-15 h-15 border-4'
      : 'w-10 h-10 border-4';

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`rounded-full animate-spin ${sizeClasses}`}
        style={{
          borderColor: `${color} transparent ${color} transparent`,
        }}
      />
    </div>
  );
};

export default Spinner;
