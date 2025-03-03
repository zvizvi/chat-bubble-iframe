
import { Button } from "@/components/ui/button";
import ChatBubbleDemo from "@/components/ChatBubbleDemo";
import ChatBubbleCode from "@/components/ChatBubbleCode";

const Index = () => {
  // Get the current origin for the iframe URL
  const origin = window.location.origin;
  const mockedChatUrl = `${origin}/chat.html`;

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
          <ChatBubbleDemo publicChatUrl={mockedChatUrl} />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">How to Use</h2>
          <div className="prose max-w-none">
            <p>Add our script to your webpage and customize it with just a few lines of code:</p>
            <ChatBubbleCode />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Customization Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-3">Appearance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Change button color to match your brand</li>
                <li>• Adjust button size for different devices</li>
                <li>• Customize chat window dimensions</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-3">Positioning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Place button in any corner of the screen</li>
                <li>• Position chat window relative to the button</li>
                <li>• Ensure visibility on all screen sizes</li>
              </ul>
            </div>
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
