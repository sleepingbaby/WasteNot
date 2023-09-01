import React from "react";
import { useEffect, useState } from "react";
// import ChatBot from "react-simple-chatbot";
import api from "../utilities.jsx";
// import { Box, createTheme, ThemeProvider, Stack } from "@mui/material";
import {  Stack } from "@mui/material";

export default function ChatBotComponent() {
  const [steps, setSteps] = useState([])

//   const theme = createTheme({
//     background: "#f5f8fb",
//     fontFamily: "Helvetica Neue",
//     headerBgColor: "#EF6C00",
//     headerFontColor: "#fff",
//     headerFontSize: "15px",
//     botBubbleColor: "#EF6C00",
//     botFontColor: "#000000",
//     userBubbleColor: "yellow",
//     userFontColor: "#4a4a4a",
//   });

  useEffect(() => {
    const getNextStep = async (userInput) => {
      try {
        const response =  api.post("chatbot/chat/", { text: userInput});
        console.log("response",response)
        const chatResponse = response.data.response;
        console.log("chat response:", chatResponse)

        // setSteps((prevSteps) => [
        //   ...prevSteps,
        //   {
        //     id: "api-response",
        //     messages : chatResponse,
        //     trigger: "user-input",
        //   },
        // ]);
      } catch (error) {
        console.error(error);
      }
    };
    getNextStep();
  }, [ChatBot]);
  return (
    <>
      <Stack
        id="mainpage"
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
      {/* <ChatBot steps={steps}/> */}

           <ChatBot
            steps={[
              {
                id: "1",
                options: [
                  { value: 1, label: "Chat", trigger: "2" },
                  { value: 2, label: "Food trivia", trigger: "3" },
                  { value: 3, label: "End", trigger: "4" }
                  
            ] },
            {
                id: '3',
                message: 'Wrong answer, try again.',
                trigger: '2'

              },
              {
                id: '4',
                message: 'Catch ya on the flip side',
                // end: true,

              },
              {
                id: '2',
                user: true,


              },

        
        
        ]}
           />  

        {/* </ThemeProvider> */}
      </Stack>
    </>
  );
}

