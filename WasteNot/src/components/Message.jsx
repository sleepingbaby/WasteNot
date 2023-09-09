import React from "react";
import { Box, Avatar, Paper, Typography } from "@mui/material";

const Message = ({ message }) => {

  const wasteBot = message.sender === "wasteBot";

  return (
    <Box
    id="chatbox"
      sx={{
        display: "flex",
        justifyContent: wasteBot ? "flex-start" : "flex-end",
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: wasteBot ? "row" : "row-reverse",
          alignItems: "center",
        }}
      >
        <Avatar 
        sx={{ 
          p:3, 
          bgcolor: wasteBot ? "#8ED7EA" : "#EE4B6A" 
          }}>
          {wasteBot ? "W" : "You"}
        </Avatar>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            ml: wasteBot ? 1 : 0,
            mr: wasteBot ? 0 : 1,
            backgroundColor: wasteBot ? "#EE4B6A" : "#8ED7EA",
            borderRadius: "20px 20px 5px 20px",
          }}
        >
          <Typography id="messages" variant="body1">
            {message.text}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Message;
