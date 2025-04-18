import React from 'react';

const HighlightText = ({ text, highlight }) => {
  if (!highlight) return text;

  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  
  return (
    <span>
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? 
          <mark key={i} className="bg-yellow-200">{part}</mark> : 
          part
      )}
    </span>
  );
};

export default HighlightText; 