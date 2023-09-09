import React, { useEffect, useState } from "react";
import api from "../utilities.jsx";
import {
  TextField,
  Button,
  Box,
  Container,
} from "@mui/material";
import Message from "./Message.jsx";

export default function ChatBotComponent() {
  const [userInput, setUserInput] = useState(null);
  const [messages, setMessages] = useState([]);
  let wasteBotMessage = {};


  const sendInitialGuidance = () => {
    const initialMessage = {
      id: messages.length + 1,
      text: "Welcome to WasteBot! You can ask me questions about ingredient subtitution, macronutrients, or unit conversions!",
      sender: "wasteBot",
    };
    setMessages([...messages, initialMessage]);
  };

  useEffect(() => {
    // Send initial guidance when component mounts
    sendInitialGuidance();
  }, []);


  const handleSubmit = async () => {
    if (userInput.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: userInput,
      sender: "user",
    };

    try {
      const response = await api.post("chatbot/chat/", { text: userInput });
      if(response.data.response.answerText === "") { 
        wasteBotMessage = {
          id: messages.length + 2,
          text: "Sorry, try another question!",
          sender: "wasteBot",
        };
      } else {

        wasteBotMessage = {
          id: messages.length + 2,
          text: response.data.response.answerText,
          sender: "wasteBot",
        };
      }

      setMessages([...messages, userMessage, wasteBotMessage]);
      setUserInput("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
   
      <Box
        sx={{
          p: 2,
          height: "400px",
          width: "400px",
          bgcolor: "white",
          overflow: "scroll",
          "::-webkit-scrollbar": {
            width: "0",
            background: "transparent",
          },
          borderRadius: "8px",
          boxShadow: `0 0 20px rgba(210, 210, 210, 0.2),
              0 0 20px rgba(210, 210, 210, 0.2),
              0 0 20px rgba(210, 210, 210, 0.2)`,
        }}
      >
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        <Container
        id="user-actions"
          sx={{
            display: "flex",
            justifyContent: "end",
            flexDirection: "row-reverse",
          }}
        >
          <Button
            id="submit-button"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#68a2b1",
              color: "#033015",
              margin: "8px",
              fontWeight: "bolder",
              "&:hover": {
                backgroundColor: "#1a2e32",
                color: "white",
              },
            }}
          >
            Submit
          </Button>
  
          <TextField
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            sx={{
              width: "100%",
            }}
          />
        </Container>
      </Box>

  );
}
