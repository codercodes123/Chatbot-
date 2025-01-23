'use client';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../config';
import ActionProvider from '../Actionprovider';
import MessageParser from '../MessageParser';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ChatbotContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
min-height: 100vh; /* Ensure the container takes full viewport height */

`;

const ChatbotStyleDiv = styled.div`

width: 400px;
height: 600px;

border-radius: 10px;
overflow: 'hidden';
box-shadow: 0 4px 10px rgba(221, 28, 28, 0.2);
background: linear-gradient(to bottom right, #f0f0f0, #dcdcdc);
Use code with caution.
`;

const ChatComponent = () => {
const audioRef = useRef(null);

useEffect(() => {

const handleUserInteraction = () => {

  if(audioRef.current){

    audioRef.current.play().catch(error => {

      console.log("Error playing audio:",error)

    })

  }
  document.removeEventListener('click',handleUserInteraction)

}

document.addEventListener('click', handleUserInteraction);

return () => {
    document.removeEventListener('click', handleUserInteraction);
};

}, []);

return (
<ChatbotContainer> {/* Centering container */}
<ChatbotStyleDiv>

<audio ref={audioRef} src="/baymax.mp3" />
        <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
        />
     </ChatbotStyleDiv>

</ChatbotContainer>

);

};

export default ChatComponent;