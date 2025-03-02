
import ChatIframe from "@/components/ChatIframe";

const PublicChat = () => {
  // Get query parameters to customize the chat
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title") || "Chat Support";
  
  return (
    <div className="h-screen w-full flex">
      <ChatIframe 
        title={title} 
        onClose={() => console.log("Close button clicked but ignored in public mode")}
      />
    </div>
  );
};

export default PublicChat;
