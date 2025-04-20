import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import FacebookSharing from './facebook_sharing';


const ShareButton = ({ article }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShare = (platform) => {
    const shareUrl = window.location.origin + article.link;
    const shareText = `${article.title} - ${article.author}`;
    
    let shareLink = '';
  
    
    

    switch(platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&t=${encodeURIComponent(shareText)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'line':
        shareLink = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }
    
    window.open(shareLink, '_blank', 'width=600,height=400');
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        onClick={toggleDropdown}
      >
        <Share2 className="w-5 h-5 text-gray-600" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-10">
     
          <button 
            onClick={() => handleShare('facebook')}
            className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
          >
            <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-4 h-4" />
            Facebook
          </button>
          <button 
            onClick={() => handleShare('twitter')}
            className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
          >
            <img src="https://www.twitter.com/favicon.ico" alt="Twitter" className="w-4 h-4" />
            Twitter
          </button>
          <button 
            onClick={() => handleShare('line')}
            className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
          >
            <img src="https://line.me/favicon.ico" alt="Line" className="w-4 h-4" />
            Line
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareButton; 