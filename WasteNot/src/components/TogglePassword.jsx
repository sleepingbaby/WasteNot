import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export default function Toggle({ label }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState("120px");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleMouse = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <TextField
        variant="filled"
        label={label}
        sx={{
          width: "90%",
          backgroundColor: "white",
          input: { color: "#1a2e32" },
          borderRadius: "6px",
          "& label.Mui-focused": { color: "#1a2e32" },
          "& label.MuiInputLabel-root": { color: "#1a2e32" },
          "& .MuiFilledInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInputBase-root:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiFilledInput-root:before": {
            borderBottom: "none",
          },
        }}
        type={isPasswordVisible ? "text" : "password"}
        value={password}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleVisibility}
                onMouseDown={handleMouse}
                edge="end"
              >
                {isPasswordVisible ? (
                  <VisibilityOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
