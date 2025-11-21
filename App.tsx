import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import HomeView from './components/HomeView';
import AIChat from './components/AIChat';
import { CHAPTERS } from './constants';
import { Menu, ArrowLeft, ArrowRight } from 'lucide-react';

function App() {
  const [currentChapterId, setCurrentChapterId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  const currentChapter = CHAPTERS.find(c => c.id === currentChapterId);
  const currentChapterIndex = CHAPTERS.findIndex(c => c.id === currentChapterId);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNextChapter = () => {
    if (currentChapterIndex < CHAPTERS.length - 1) {
      setCurrentChapterId(CHAPTERS[currentChapterIndex + 1].id);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterId(CHAPTERS[currentChapterIndex - 1].id);
      window.scrollTo(0, 0);
    } else {
        setCurrentChapterId(null); // Go home
        window.scrollTo(0, 0);
    }
  };

  const handleStartReading = () => {
      setCurrentChapterId(CHAPTERS[0].id);
      window.scrollTo(0, 0);
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      
      {/* Sidebar Navigation */}
      <Sidebar 
        currentChapterId={currentChapterId}
        onSelectChapter={(id) => {
            setCurrentChapterId(id === 'HOME' ? null : id);
            window.scrollTo(0, 0);
        }}
        isOpen={isSidebarOpen}
        onCloseMobile={() => setIsSidebarOpen(false)}
        isDarkMode={theme === 'dark'}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        
        {/* Mobile Header */}
        <header className="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between sticky top-0 z-10 transition-colors duration-300">
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300">
                <Menu className="w-6 h-6" />
            </button>
            <span className="font-bold text-primary-blue dark:text-blue-400 truncate max-w-[200px]">
                {currentChapter ? currentChapter.title : "IA Vendas"}
            </span>
            <div className="w-10"></div> {/* Spacer for centering */}
        </header>

        {/* Content Scrollable Area */}
        <main className="flex-1 p-4 sm:p-8 lg:p-12 max-w-4xl mx-auto w-full">
            {currentChapter ? (
                <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
                    <article className="prose prose-lg prose-blue dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                        {currentChapter.content}
                    </article>

                    {/* Navigation Footer */}
                    <div className="mt-8 flex items-center justify-between">
                        <button 
                            onClick={handlePrevChapter}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="hidden sm:inline">Anterior</span>
                        </button>

                        <span className="text-sm text-gray-400 dark:text-gray-500">
                            {currentChapterIndex + 1} de {CHAPTERS.length}
                        </span>

                        <button 
                            onClick={handleNextChapter}
                            disabled={currentChapterIndex === CHAPTERS.length - 1}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                                currentChapterIndex === CHAPTERS.length - 1 
                                    ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' 
                                    : 'text-primary-blue dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30'
                            }`}
                        >
                            <span className="hidden sm:inline">Próximo</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="animate-in fade-in zoom-in-95 duration-500">
                    <HomeView onStartReading={handleStartReading} />
                </div>
            )}
        </main>

        <footer className="p-6 text-center text-sm text-gray-400 dark:text-gray-500">
            <p>Demonstração React + Tailwind + Gemini API</p>
        </footer>
      </div>

      {/* AI Assistant */}
      <AIChat />

    </div>
  );
}

export default App;