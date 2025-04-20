import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const FacebookSharing = ({ article }) => {
  useEffect(() => {
    // 加载 Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v12.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/zh_TW/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const title = article ? article.title : '數位無障礙資源平台';
  const description = article ? `${article.title} - ${article.author}` : '探索數位無障礙的知識與資源';
  const imageUrl = article && article.image ? article.image : '';

  return (
    <>
      <Helmet>
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
      </Helmet>
      
      <div id="fb-root"></div>
      
      {/* Facebook 分享按鈕 */}
      <div 
        className="fb-share-button" 
        data-href={currentUrl} 
        data-layout="button_count"
        data-size="small">
      </div>
    </>
  );
};

export default FacebookSharing;