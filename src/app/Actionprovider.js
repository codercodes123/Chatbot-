import { CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH } from 'next/dist/shared/lib/constants';
import { createChatBotMessage } from 'react-chatbot-kit';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: '8970adb385c646329e924a4f3bdb9121',
    baseURL: 'https://api.aimlapi.com',
    dangerouslyAllowBrowser: true,
});

class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomerMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomerMessage = createCustomerMessage;
    }

    callGenAI = async (prompt) => {
        const ChatCompletion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: 'You are a Medical Advisor' },
                { role: 'user', content: prompt },
            ],
            temperature: 0.5,
            max_tokens: 50,
        });
        return ChatCompletion.choices[0].message.content;
    };
    

    timer = (ms) => new Promise((res) => setTimeout(res, ms));

    generateResponseMessage = async (userPrompt) => {
        const responseFromGPT = await this.callGenAI(userPrompt);
        const lines = responseFromGPT.split('\n').filter((line) => line.trim().length);
        
        for (let line of lines) {
            const message = this.createChatBotMessage(line);
            this.updateChatBotMessage(message);
            await this.timer(1000); // Delay for better UX
        }
    };

    respond = (userMessage) => {
        this.generateResponseMessage(userMessage);
    };

    updateChatBotMessage = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };
}

export default ActionProvider;
