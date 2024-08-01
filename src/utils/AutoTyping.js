// AutoTyping.js
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const AutoTyping = () => {
  return (
    <div className="text-[14px] font-[400]">
      <Typewriter
        words={['Travel blogger.', 'Content writer', 'Food guides', 'Tech News']}
        loop={0} // Set to 0 for infinite loop
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={100}
        delaySpeed={1000}
      />
    </div>
  );
};

export default AutoTyping;
