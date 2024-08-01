import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / totalHeight) * 100;
    setScrollWidth(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 z-50">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
