import React from "react";
import ChatBot from 'react-simple-chatbot';
import api from '../utilities.jsx'
import { Box, createTheme, ThemeProvider } from "@mui/material";


export default function ChatBotComponent () {

const theme = createTheme({
    background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#000000',
  userBubbleColor: 'yellow',
  userFontColor: '#4a4a4a',
})


    
    return (
    
     <ThemeProvider theme={theme}>
<div>

   <ChatBot
      steps= {[
          {
              id:"hello-world",
              message: "Hellooooo World!",
              end: true,
            },
        ]}
       
/>
        </div>

</ThemeProvider>

    )
}