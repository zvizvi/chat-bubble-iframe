
/**
 * Chat Bubble Library
 * A lightweight JavaScript library to embed a frame widget on any webpage
 */
(function() {
  // Default configuration
  const defaultConfig = {
    frameUrl: 'https://your-iframe-url.com/',
    frameTitle: 'Chat Support',
    buttonColor: '#3b82f6',
    buttonPosition: 'bottom-right',
    buttonSize: '60px',
    frameWidth: '320px',
    frameHeight: '400px',
    buttonIcon: 'message-circle', // Options: 'message-circle', 'arrow-up', 'arrow-down', 'close'
    openButtonIcon: 'close', // Icon when chat is open
  };

  // Merge default config with user config
  const config = {
    ...defaultConfig,
    ...(window.chatBubbleConfig || {})
  };

  // Get position styles based on buttonPosition
  function getPositionStyles(position) {
    switch (position) {
      case 'bottom-left':
        return 'bottom: 20px; left: 20px;';
      case 'top-right':
        return 'top: 20px; right: 20px;';
      case 'top-left':
        return 'top: 20px; left: 20px;';
      case 'bottom-right':
      default:
        return 'bottom: 20px; right: 20px;';
    }
  }

  // Get chat container position based on button position
  function getChatContainerPosition(position) {
    switch (position) {
      case 'bottom-left':
        return 'bottom: 90px; left: 20px;';
      case 'top-right':
        return 'top: 90px; right: 20px;';
      case 'top-left':
        return 'top: 90px; left: 20px;';
      case 'bottom-right':
      default:
        return 'bottom: 90px; right: 20px;';
    }
  }

  // Get icon SVG based on icon name
  function getIconSvg(iconName) {
    switch (iconName) {
      case 'arrow-up':
        return '<svg class="chat-bubble-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      case 'arrow-down':
        return '<svg class="chat-bubble-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      case 'close':
        return '<svg class="chat-bubble-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      case 'message-circle':
      default:
        return '<svg class="chat-bubble-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21 16.9706 16.9706 21 12 21C10.8976 21 9.82578 20.8204 8.82353 20.4857C8.74178 20.4594 8.65567 20.4472 8.57143 20.4472C8.4881 20.4472 8.40477 20.4594 8.32353 20.4857L3.58333 21.9857C3.22241 22.093 2.83138 21.8562 2.83333 21.4764V16.4671C2.83333 16.3682 2.80277 16.2713 2.74609 16.1868C1.65389 14.5489 1 12.576 1 10.5C1 5.52944 5.02944 1.5 10 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }
  }

  // Create stylesheet
  const style = document.createElement('style');
  style.innerHTML = `
    .chat-bubble-button {
      position: fixed;
      ${getPositionStyles(config.buttonPosition)}
      width: ${config.buttonSize};
      height: ${config.buttonSize};
      border-radius: 50%;
      background-color: ${config.buttonColor};
      color: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 9999;
      transition: all 0.3s ease;
    }
    .chat-bubble-button:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }
    .chat-bubble-icon {
      width: 24px;
      height: 24px;
    }
    .chat-bubble-header {
      background-color: ${config.buttonColor};
      color: white;
      padding: 10px 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      font-weight: 500;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .chat-iframe-container {
      position: fixed;
      ${getChatContainerPosition(config.buttonPosition)}
      width: ${config.frameWidth};
      height: ${config.frameHeight};
      z-index: 9999;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      display: none;
      flex-direction: column;
      transition: all 0.3s ease;
      animation: chatFadeIn 0.3s forwards;
      background-color: white;
    }
    .chat-iframe {
      width: 100%;
      height: 100%;
      border: none;
      flex: 1;
    }
    .chat-close-button {
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
    }
    .chat-close-button:hover {
      opacity: 0.8;
    }
    @keyframes chatFadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // Create button
  const button = document.createElement('div');
  button.className = 'chat-bubble-button';
  button.innerHTML = getIconSvg(config.buttonIcon);
  document.body.appendChild(button);

  // Create iframe container
  const iframeContainer = document.createElement('div');
  iframeContainer.className = 'chat-iframe-container';
  document.body.appendChild(iframeContainer);

  // Create iframe with the specified URL
  let iframe = null;
  let chatOpen = false;

  // Toggle chat function
  function toggleChat() {
    chatOpen = !chatOpen;
    
    if (chatOpen) {
      iframeContainer.style.display = 'flex';
      button.innerHTML = getIconSvg(config.openButtonIcon);
      
      if (!iframe) {
        // Create header with title
        const headerElement = document.createElement('div');
        headerElement.className = 'chat-bubble-header';
        
        // Add title
        const titleElement = document.createElement('div');
        titleElement.textContent = config.frameTitle;
        
        // Add close button in header
        const closeButton = document.createElement('button');
        closeButton.className = 'chat-close-button';
        closeButton.innerHTML = getIconSvg('close');
        closeButton.addEventListener('click', toggleChat);
        
        headerElement.appendChild(titleElement);
        headerElement.appendChild(closeButton);
        iframeContainer.appendChild(headerElement);
        
        // Create and add iframe
        iframe = document.createElement('iframe');
        iframe.className = 'chat-iframe';
        iframe.src = config.frameUrl;
        iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-forms allow-popups');
        iframe.setAttribute('title', config.frameTitle);
        iframeContainer.appendChild(iframe);
      }
    } else {
      iframeContainer.style.display = 'none';
      button.innerHTML = getIconSvg(config.buttonIcon);
    }
  }

  // Add click event listener
  button.addEventListener('click', toggleChat);
})();
