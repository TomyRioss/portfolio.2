import React from 'react';

const UnderlineText = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-1 bg-current transform translate-y-2"></span>
    </div>
  );
};

export default UnderlineText;
