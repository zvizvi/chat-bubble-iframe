
import { Button } from "@/components/ui/button";
import ChatBubbleDemo from "@/components/ChatBubbleDemo";
import ChatBubbleCode from "@/components/ChatBubbleCode";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="py-8 px-6 md:px-12 lg:px-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Chat Bubble Library</h1>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          A lightweight JavaScript library to embed a chat button on any webpage
        </p>
      </header>
      
      <main className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <section className="mb-16">
          <ChatBubbleDemo />
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">How to Use</h2>
          <div className="prose max-w-none">
            <p>Add our script to your webpage and create a chat bubble with just a few lines of code:</p>
            <ChatBubbleCode />
          </div>
        </section>
      </main>
      
      <footer className="py-8 border-t border-gray-200 mt-20">
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Chat Bubble Library
        </div>
      </footer>
    </div>
  );
};

export default Index;
