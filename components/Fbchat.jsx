"use client";
import React, { useEffect } from 'react';

const FacebookChatPlugin = () => {
  useEffect(() => {
    // Your Facebook SDK initialization
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v18.0',
      });
    };

    // Load Facebook SDK asynchronously
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  useEffect(() => {
    // Set up Facebook Chat Plugin attributes after the SDK has loaded
    if (window.FB) {
      window.FB.XFBML.parse(); // Parse XFBML elements to render Facebook Chat Plugin
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute('page_id', '110828641248126');
      chatbox.setAttribute('attribution', 'biz_inbox');
    }
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      {/* Your Chat Plugin code */}
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
};

export default FacebookChatPlugin;
