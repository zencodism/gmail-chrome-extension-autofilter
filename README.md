#Gmail Autofilter

Proof of concept automatic filtering of gmail messages. This is Chrome extension code, for testing follow instruction from: 

https://developer.chrome.com/extensions/getstarted#unpacked

To be sure it works check your javascript console for 'Hello, <user>' and 'Filters set!' messages.

What does it do: upon seeing a new message in user's inbox it will check its content for specified keyword (main.js, at the beginning); if the keyword is present, a new filter is created adding a specified label and archiving further messages with the same keyword.

How this works: it is meant for testing and research purposes; manifest and content.js are crafted in sole purpose of injecting other scripts and allowing them to work in gmail environment. The customizable code resides in main.js. In particular, at the beginning of main.js there are hardcoded values for both keyword and label to apply.

This small project makes use of:

  - Gmail.js project (https://github.com/KartikTalwar/gmail.js) to access logged-in user's inbox and email data;
  - Gmail-Filters (https://github.com/GrexIt/Gmail-Filters-Js-api) - an older project exposing api to set a new filter for a logged-in gmail user. This task is rather tricky and this dependency could be further improved;
  - a boilerplate extension created to bypass gmail security policy and allow for script injection (here: https://github.com/KartikTalwar/gmail-chrome-extension-boilerplate). The following is original readme:

# Gmail.js Chrome Extension

Hello world chrome extension using gmail.js

This is a sample chome extension that uses gmail.js to build apps on top of Gmail.

The manifest in this repo bypasses the new Content Security Policy (CSP) enforced by Gmail.

### Please use the latest `gmail.js` file from the original repo linked below

**http://github.com/kartiktalwar/gmail.js**



