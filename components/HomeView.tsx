import React from 'react';
import { BOOK_METADATA } from '../constants';
import { ChevronRight, Star } from 'lucide-react';

interface HomeViewProps {
    onStartReading: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onStartReading }) => {
    return (
        <div className="max-w-3xl mx-auto text-center py-12 px-4 sm:px-6">
            <div className="bg-gradient-to-br from-primary-blue to-primary-dark dark:from-blue-900 dark:to-blue-950 text-white rounded-3xl shadow-2xl p-10 sm:p-16 mb-12 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-accent-orange opacity-10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wide mb-6 backdrop-blur-sm">
                        {BOOK_METADATA.author}
                    </span>
                    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-sm font-serif">
                        {BOOK_METADATA.title}
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-light text-blue-100 italic mb-8 leading-relaxed">
                        {BOOK_METADATA.subtitle}
                    </h2>
                    
                    <button 
                        onClick={onStartReading}
                        className="inline-flex items-center gap-2 bg-accent-orange hover:bg-accent-hover text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Começar a Ler
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                        <Star className="w-5 h-5 text-primary-blue dark:text-blue-400" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Conteúdo Prático</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Estratégias reais para aplicar IA no seu negócio hoje.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                        <Star className="w-5 h-5 text-primary-blue dark:text-blue-400" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Assistente IA</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tire dúvidas sobre o conteúdo com nossa IA integrada.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                        <Star className="w-5 h-5 text-primary-blue dark:text-blue-400" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Futuro das Vendas</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Entenda as tendências de Metaverso e Automação 5.0.</p>
                </div>
            </div>
        </div>
    );
};

export default HomeView;