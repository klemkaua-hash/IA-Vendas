import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: 'Olá! Eu sou o assistente IA deste livro. Tem alguma dúvida sobre como aplicar IA nas suas vendas?' }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!inputText.trim() || isLoading) return;

        const userMsg = inputText;
        setInputText('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        try {
            // Format history for the API
            const history = messages.map(m => ({
                role: m.role,
                parts: [{ text: m.text }]
            }));

            const responseText = await sendMessageToGemini(userMsg, history);
            
            setMessages(prev => [...prev, { role: 'model', text: responseText || "Desculpe, não consegui gerar uma resposta." }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'model', text: "Ocorreu um erro ao conectar com a IA. Verifique sua chave de API ou tente novamente mais tarde.", isError: true }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 bg-accent-orange hover:bg-accent-hover text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2 group"
                >
                    <Sparkles className="w-6 h-6" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">
                        Conversar com o Livro
                    </span>
                </button>
            )}

            {/* Chat Interface */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300 h-[600px] max-h-[80vh]">
                    {/* Header */}
                    <div className="bg-primary-blue dark:bg-blue-900 p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-accent-orange" />
                            <h3 className="font-bold">Assistente IA Vendas</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div 
                                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                        msg.role === 'user' 
                                            ? 'bg-primary-blue text-white rounded-br-none' 
                                            : msg.isError 
                                                ? 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 rounded-bl-none border border-red-200 dark:border-red-800'
                                                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-gray-700'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-bl-none border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin text-primary-blue dark:text-blue-400" />
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Pensando...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Pergunte sobre o livro..."
                                className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:bg-white dark:focus:bg-gray-600 transition-all"
                                disabled={isLoading}
                            />
                            <button 
                                onClick={handleSend}
                                disabled={isLoading || !inputText.trim()}
                                className="absolute right-2 p-2 bg-primary-blue text-white rounded-full hover:bg-primary-dark disabled:opacity-50 disabled:hover:bg-primary-blue transition-colors"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="text-center mt-2">
                            <p className="text-[10px] text-gray-400 dark:text-gray-500">Powered by Gemini 2.5 Flash</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIChat;