import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ShortcutCards } from "./components/ShortcutCards";
import { ChatBot } from "./components/ChatBot";
import { AdvisorySection } from "./components/AdvisorySection";
import { FeedbackSection } from "./components/FeedbackSection";
import { Footer } from "./components/Footer";
import { ProfilePage } from "./components/ProfilePage";
import { HelpPage } from "./components/HelpPage";
import { ContactPage } from "./components/ContactPage";
import { QueryPage } from "./components/QueryPage";
import { Language } from "./utils/translations";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatTopic, setChatTopic] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [language, setLanguage] = useState<Language>('en');

  const handleOpenChat = (topic?: string) => {
    if (topic) {
      setChatTopic(topic);
    }
    setIsChatOpen(true);
  };

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setChatTopic("");
    }
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Close chat when navigating to different pages
    setIsChatOpen(false);
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <main>
            <HeroSection onOpenChat={() => handleOpenChat()} language={language} />
            <ShortcutCards onOpenChat={handleOpenChat} language={language} />
            <AdvisorySection language={language} />
            <FeedbackSection language={language} />
          </main>
        );
      case 'profile':
        return <ProfilePage language={language} />;
      case 'help':
        return <HelpPage language={language} />;
      case 'contact':
        return <ContactPage language={language} />;
      case 'queries':
        return <QueryPage language={language} onOpenChat={() => handleOpenChat()} />;
      default:
        return (
          <main>
            <HeroSection onOpenChat={() => handleOpenChat()} language={language} />
            <ShortcutCards onOpenChat={handleOpenChat} language={language} />
            <AdvisorySection language={language} />
            <FeedbackSection language={language} />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
      
      {renderCurrentPage()}

      {currentPage === 'home' && <Footer language={language} />}

      <ChatBot 
        isOpen={isChatOpen} 
        onToggle={handleToggleChat}
        initialTopic={chatTopic}
        language={language}
      />
    </div>
  );
}