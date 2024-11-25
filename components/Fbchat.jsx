"use client";
import React, { useEffect } from "react";

const FacebookChatPlugin = () => {
  useEffect(() => {
    // Function to initialize the Facebook SDK
    const initializeFacebookSDK = () => {
      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: "v18.0",
        });
      };

      // Load the Facebook SDK script
      if (!document.getElementById("facebook-jssdk")) {
        const script = document.createElement("script");
        script.id = "facebook-jssdk";
        script.src = "https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Set up the Chat Plugin attributes after the script is loaded
    const setupChatPlugin = () => {
      const chatbox = document.getElementById("fb-customer-chat");
      if (chatbox) {
        chatbox.setAttribute("page_id", "110828641248126");
        chatbox.setAttribute("attribution", "biz_inbox");
      }
    };

    // Initialize and set up the SDK
    initializeFacebookSDK();
    setupChatPlugin();
  }, []); // Empty dependency array ensures this runs once

  return (
    <div>
      {/* Facebook root container */}
      <div id="fb-root"></div>
      {/* Facebook Chat Plugin container */}
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
};

export default FacebookChatPlugin;
