
/**
 * Chat Bubble Library
 * A lightweight JavaScript library to embed a frame widget on any webpage
 */
(function() {
  // Default configuration
  const defaultConfig = {
    header: {
      shown: true,
      backgroundColor: '#f9fafb',
      textColor: '#000000',
      title: 'Chat Support'
    },
    frame: {
      url: 'https://your-iframe-url.com/',
      width: '320px',
      height: '400px',
      persist: false
    },
    button: {
      icon: 'message-circle',
      backgroundColor: '#3b82f6',
      textColor: '#ffffff',
      position: 'bottom-right',
      size: '60px'
    },
    openButton: {
      icon: 'close',
      backgroundColor: '#3b82f6',
      textColor: '#ffffff'
    }
  };

  // Merge default config with user config (preserving nested objects)
  const mergeConfig = (defaultObj, userObj) => {
    const result = { ...defaultObj };
    
    if (!userObj) return result;
    
    Object.keys(result).forEach(key => {
      if (userObj[key] !== undefined) {
        if (typeof result[key] === 'object' && !Array.isArray(result[key]) && 
            typeof userObj[key] === 'object' && !Array.isArray(userObj[key])) {
          result[key] = mergeConfig(result[key], userObj[key]);
        } else {
          result[key] = userObj[key];
        }
      }
    });
    
    return result;
  };
  
  // Create the final config
  const config = mergeConfig(defaultConfig, window.chatBubbleConfig || {});

  // Get position styles based on button position
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

  // Get icon content based on the icon name or SVG string
  function getIconContent(icon) {
    if (typeof icon !== 'string') return defaultIcons['message-circle'];

    // If it's an SVG string, return it directly
    if (icon.trim().startsWith('<svg')) return icon;

    // Otherwise, look up icon by name or return default
    return defaultIcons[icon] || defaultIcons['message-circle'];
  }

  // Default icons
  const defaultIcons = {
    'message-circle': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'close': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'arrow-up': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'arrow-down': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  // Create stylesheet
  const style = document.createElement('style');
  style.innerHTML = `
    .chat-bubble-button {
      position: fixed;
      ${getPositionStyles(config.button.position)}
      width: ${config.button.size};
      height: ${config.button.size};
      border-radius: 50%;
      background-color: ${config.button.backgroundColor};
      color: ${config.button.textColor};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 9999;
      transition: all 0.3s ease;
    }
    .chat-bubble-button:hover {
      transform: scale(1.03);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }
    .chat-bubble-button svg {
      width: 24px;
      height: 24px;
    }
    .chat-bubble-header {
      background-color: ${config.header.backgroundColor};
      color: ${config.header.textColor};
      padding: 12px;
      border-bottom: solid 0.8px #e5e7eb;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      font-weight: 500;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .chat-iframe-container {
      position: fixed;
      ${getChatContainerPosition(config.button.position)}
      width: ${config.frame.width};
      height: ${config.frame.height};
      z-index: 9998;
      overflow: hidden;
      border-radius: 8px;
      border: solid 0.8px #e5e7eb;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
      background-color: white;
      flex-direction: column;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
    }
    .chat-iframe-container.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .chat-iframe {
      width: 100%;
      flex: 1;
      border: none;
    }
    .chat-close-button {
      background: transparent;
      border: none;
      color: ${config.header.textColor};
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
    }
    .chat-close-button:hover {
      opacity: 0.8;
    }
    .chat-close-button svg {
      width: 18px;
      height: 18px;
    }
    
    @keyframes slide-in-up {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slide-out-down {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(20px);
      }
    }
  `;
  document.head.appendChild(style);

  // Create button
  const button = document.createElement('div');
  button.className = 'chat-bubble-button';
  button.innerHTML = getIconContent(config.button.icon);
  document.body.appendChild(button);

  // Create iframe container
  const iframeContainer = document.createElement('div');
  iframeContainer.className = 'chat-iframe-container';
  iframeContainer.style.display = 'flex'; // Always use flex for layout
  document.body.appendChild(iframeContainer);

  // Create iframe with the specified URL
  let iframe = null;
  let chatOpen = false;

  // Initialize the iframe if persistFrame is true or when first opened
  function initIframe() {
    if (!iframe) {
      // Add header if shown is true
      if (config.header.shown) {
        // Create header with title
        const headerElement = document.createElement('div');
        headerElement.className = 'chat-bubble-header';

        // Add title
        const titleElement = document.createElement('div');
        titleElement.textContent = config.header.title;

        // Add close button in header
        const closeButton = document.createElement('button');
        closeButton.className = 'chat-close-button';
        closeButton.innerHTML = defaultIcons['close'];
        closeButton.addEventListener('click', toggleChat);

        headerElement.appendChild(titleElement);
        headerElement.appendChild(closeButton);
        iframeContainer.appendChild(headerElement);
      }

      // Create and add iframe
      iframe = document.createElement('iframe');
      iframe.className = 'chat-iframe';
      iframe.src = config.frame.url;
      iframe.allow = 'microphone; camera; geolocation';
      iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-downloads');
      iframe.setAttribute('title', config.header.title);
      iframeContainer.appendChild(iframe);
    }
  }

  // Initialize iframe immediately if persist is true
  if (config.frame.persist) {
    initIframe();
  }

  // Toggle chat function
  function toggleChat() {
    chatOpen = !chatOpen;

    if (chatOpen) {
      // Initialize the iframe if not already done
      if (!iframe) {
        initIframe();
      }

      // Update button to use openButton styles
      button.style.backgroundColor = config.openButton.backgroundColor;
      button.style.color = config.openButton.textColor;

      // Show the container with animation
      iframeContainer.classList.add('visible');
      iframeContainer.style.animation = 'slide-in-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
      button.innerHTML = getIconContent(config.openButton.icon);
    } else {
      // Restore original button styles
      button.style.backgroundColor = config.button.backgroundColor;
      button.style.color = config.button.textColor;

      // Hide the container with animation
      iframeContainer.style.animation = 'slide-out-down 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
      button.innerHTML = getIconContent(config.button.icon);
      
      // After animation completes
      setTimeout(() => {
        iframeContainer.classList.remove('visible');
        
        // If not persisting, remove the iframe
        if (!config.frame.persist && iframe) {
          iframeContainer.innerHTML = '';
          iframe = null;
        }
      }, 300); // Match the animation duration
    }
  }

  // Add click event listener
  button.addEventListener('click', toggleChat);
})();
