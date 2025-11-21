import { ReactNode } from 'react';

export interface Chapter {
    id: string;
    title: string;
    content: ReactNode;
    plainText: string;
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
    isError?: boolean;
}

export enum ViewState {
    READING = 'READING',
    HOME = 'HOME'
}