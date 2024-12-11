import React from 'react';

const NameTitle = () => {
  return (
    <div className="pt-80 pl-56 text-dark-blue dark:text-white ">
      <h1
        className="py-12 text-6xl font-modern-serif font-semibold"
        style={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.2)' }}
      >
        Tomas Alexander Rios
      </h1>
      <h2
        className="pl-2 text-5xl font-modern-serif font-semibold text-gradient bg-gradient-to-r dark:from-teal-200 dark:to-blue-300 from-blue-400 to-cyan-300"
        style={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.1)' }}
      >
        FrontEnd Developer
      </h2>
    </div>
  );
};

export default NameTitle;
