import React, { useState, useEffect } from 'react';
import { CHAPTERS, BOOK_METADATA } from '../constants';
import { Book, ChevronRight, Download, Check, Wifi, Loader2, Moon, Sun, RefreshCw } from 'lucide-react';

interface SidebarProps {
    currentChapterId: string | null;
    onSelectChapter: (id: string) => void;
    isOpen: boolean;
    onCloseMobile: () => void;
    isDarkMode: boolean;
    onToggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentChapterId, onSelectChapter, isOpen, onCloseMobile, isDarkMode, onToggleTheme }) => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState(0);
    const [isOfflineReady, setIsOfflineReady] = useState(false);

    useEffect(() => {
        // Check if cache already exists
        if ('caches' in window) {
            caches.has('ia-vendas-v1').then(hasCache => {
                if (hasCache) setIsOfflineReady(true);
            });
        }
    }, []);

    const handleDownload = async () => {
        setIsDownloading(true);
        setDownloadProgress(0);
        try {
            const cache = await caches.open('ia-vendas-v1');
            
            // 1. Get ImportMap URLs (Dependencies)
            const importMapScript = document.querySelector('script[type="importmap"]');
            const imports = importMapScript ? JSON.parse(importMapScript.innerHTML).imports : {};
            const urlsToCache = Object.values(imports) as string[];
            
            // 2. Critical External Assets
            urlsToCache.push('https://cdn.tailwindcss.com');
            urlsToCache.push('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');

            // 3. Local App Files (Best effort list for caching)
            // In a real build, these would be the bundled assets.
            const localFiles = [
                './',
                './index.html', 
                './index.tsx',
                './App.tsx', 
                './types.ts', 
                './constants.tsx',
                './services/geminiService.ts', 
                './components/Sidebar.tsx',
                './components/HomeView.tsx',
                './components/AIChat.tsx',
                '/sw.js'
            ];
            
            // Add local files to the list
            localFiles.forEach(f => urlsToCache.push(f));

            const total = urlsToCache.length;
            let completed = 0;

            // Cache all assets with progress tracking
            await Promise.all(urlsToCache.map(async (url) => {
                try {
                    await cache.add(url);
                } catch (err) {
                    console.warn(`Failed to cache ${url}`, err);
                } finally {
                    completed++;
                    setDownloadProgress(Math.round((completed / total) * 100));
                }
            }));
            
            setIsOfflineReady(true);
        } catch (err) {
            console.error("Erro ao baixar conteúdo:", err);
            alert("Erro ao baixar conteúdo. Tente novamente.");
        } finally {
            setIsDownloading(false);
            setDownloadProgress(0);
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-20 lg:hidden backdrop-blur-sm"
                    onClick={onCloseMobile}
                />
            )}

            {/* Sidebar Container */}
            <aside 
                className={`fixed lg:static inset-y-0 left-0 w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0 transition-transform duration-300 ease-in-out z-30 flex flex-col h-full shadow-xl lg:shadow-none transition-colors duration-300`}
            >
                {/* Header */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                    <div className="flex items-center gap-2 text-primary-blue dark:text-blue-400 mb-2">
                        <Book className="w-6 h-6" />
                        <span className="font-bold tracking-tight">Ebook Reader</span>
                    </div>
                    <h1 className="text-xl font-extrabold text-gray-900 dark:text-white leading-tight">{BOOK_METADATA.title}</h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{BOOK_METADATA.subtitle}</p>
                </div>

                {/* Navigation List */}
                <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700">
                    <button
                        onClick={() => {
                            onSelectChapter('HOME');
                            onCloseMobile();
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                            currentChapterId === null 
                                ? 'bg-primary-blue text-white shadow-md' 
                                : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-primary-blue dark:hover:text-blue-400'
                        }`}
                    >
                        <span>Capa & Introdução</span>
                        {currentChapterId === null && <ChevronRight className="w-4 h-4" />}
                    </button>
                    
                    <div className="my-2 border-t border-gray-100 dark:border-gray-700 mx-2"></div>
                    <p className="px-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 mt-4">Capítulos</p>

                    {CHAPTERS.map((chapter) => (
                        <button
                            key={chapter.id}
                            onClick={() => {
                                onSelectChapter(chapter.id);
                                onCloseMobile();
                            }}
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 flex items-center justify-between group ${
                                currentChapterId === chapter.id 
                                    ? 'bg-primary-blue text-white shadow-md font-medium' 
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-primary-blue dark:hover:text-blue-400'
                            }`}
                        >
                            <span className="line-clamp-1">{chapter.title}</span>
                            {currentChapterId === chapter.id && <ChevronRight className="w-4 h-4" />}
                        </button>
                    ))}
                </nav>

                {/* Footer / Actions */}
                <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                    
                    {/* Theme Toggle */}
                    <button
                        onClick={onToggleTheme}
                        className="w-full flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-blue dark:hover:text-white bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 p-3 rounded-lg mb-3 transition-all text-xs font-medium"
                    >
                        {isDarkMode ? (
                            <>
                                <Sun className="w-4 h-4" />
                                <span>Modo Claro</span>
                            </>
                        ) : (
                            <>
                                <Moon className="w-4 h-4" />
                                <span>Modo Escuro</span>
                            </>
                        )}
                    </button>

                    {isOfflineReady ? (
                        <div className="flex flex-col items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 p-3 rounded-lg mb-3 justify-center border border-green-100 dark:border-green-800 w-full">
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4" />
                                <span className="text-xs font-semibold">Disponível Offline</span>
                            </div>
                            <button 
                                onClick={handleDownload}
                                disabled={isDownloading}
                                className="text-[10px] underline hover:text-green-700 dark:hover:text-green-300 flex items-center gap-1"
                            >
                                <RefreshCw className={`w-3 h-3 ${isDownloading ? 'animate-spin' : ''}`} />
                                {isDownloading ? 'Atualizando...' : 'Atualizar Cache'}
                            </button>
                        </div>
                    ) : (
                        <div className="w-full">
                            <button
                                onClick={handleDownload}
                                disabled={isDownloading}
                                className="w-full flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-blue dark:hover:text-white bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 p-3 rounded-lg mb-3 transition-all text-xs font-medium relative overflow-hidden"
                            >
                                {/* Progress Background */}
                                {isDownloading && (
                                    <div 
                                        className="absolute left-0 top-0 bottom-0 bg-blue-100 dark:bg-blue-900/50 transition-all duration-300"
                                        style={{ width: `${downloadProgress}%` }}
                                    />
                                )}
                                
                                <div className="relative flex items-center gap-2 z-10">
                                    {isDownloading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>Baixando {downloadProgress}%</span>
                                        </>
                                    ) : (
                                        <>
                                            <Download className="w-4 h-4" />
                                            <span>Baixar Livro (Offline)</span>
                                        </>
                                    )}
                                </div>
                            </button>
                        </div>
                    )}
                    <div className="text-center">
                        <p className="text-xs text-gray-400 dark:text-gray-600">© 2025 IA Vendas</p>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;