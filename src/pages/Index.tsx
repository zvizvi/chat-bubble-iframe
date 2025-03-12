
import ChatBubbleDemo from "@/components/ChatBubbleDemo";
import ChatBubbleCode from "@/components/ChatBubbleCode";
import { GradientHeading } from "@/components/ui/gradient-heading";

const Index = () => {
  const origin = window.location.origin;
  const mockedChatUrl = `${origin}/mocked-chat`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-16 sm:py-24">
          <GradientHeading
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6"
            gradient="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600"
          >
            Chat Bubble Library
          </GradientHeading>
          <p className="text-gray-600 text-center text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Add a sleek chat widget to your website in minutes. Fully customizable,
            lightweight, and easy to integrate.
          </p>
        </header>

        <main className="pb-12">
          <div className="space-y-24">
            <section className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-blue-50/30 to-transparent rounded-3xl -z-10" />
              <div className="px-8">
                <ChatBubbleDemo publicChatUrl={mockedChatUrl} />
              </div>
            </section>

            <section className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent rounded-3xl -z-10" />
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Quick Integration
                </h2>
                <div className="prose max-w-none">
                  <p className="text-gray-600 text-lg mb-6">
                    Add our script to your webpage and customize it with just a few lines of code:
                  </p>
                  <ChatBubbleCode />
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Appearance</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      Match your brand with custom colors
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      Responsive design for all devices
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      Customizable chat window dimensions
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Flexibility</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Position anywhere on your page
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Smart positioning for mobile
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Multiple icon options
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer className="py-8 border-t border-gray-200">
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Chat Bubble Library. Built with modern web standards.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
