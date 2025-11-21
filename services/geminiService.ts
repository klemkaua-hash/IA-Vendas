import { GoogleGenAI } from "@google/genai";
import { FULL_BOOK_TEXT } from "../constants";

// Initialize the client with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (userMessage: string, history: { role: string, parts: { text: string }[] }[]) => {
    try {
        const model = 'gemini-2.5-flash';
        
        const systemInstruction = `
        Você é um assistente virtual especializado no eBook "IA Vendas".
        Sua função é responder perguntas dos leitores baseando-se ESTRITAMENTE no conteúdo do livro fornecido abaixo.
        Se a resposta não estiver no livro, diga que o livro não aborda esse tema específico, mas tente relacionar com conceitos de IA em vendas se possível.
        Seja didático, encorajador e use exemplos do livro.
        
        --- CONTEÚDO DO LIVRO ---
        ${FULL_BOOK_TEXT}
        --- FIM DO CONTEÚDO ---
        `;

        // We use generateContent for a single turn or custom chat management, 
        // but utilizing ai.chats.create is cleaner for history.
        // However, to strictly enforce the system instruction context window effectively with the full book text
        // on every turn (or just system instruction), we can configure it.
        
        const chat = ai.chats.create({
            model: model,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
            },
            history: history, 
        });

        const result = await chat.sendMessage({ message: userMessage });
        return result.text;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw error;
    }
};