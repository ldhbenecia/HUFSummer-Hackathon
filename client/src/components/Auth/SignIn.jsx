import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  InputAdornment,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { indigo } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const color = indigo[500];
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: "calc(50vh - 200px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            LinkedDorm
          </Typography>
          <TextField
            id="id"
            label="아이디"
            name="id"
            autoComplete="id"
            required
            fullWidth
            value={id}
            onChange={handleIdChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            id="password"
            margin="normal"
            label="비밀번호"
            type="password"
            required
            fullWidth
            name="password"
            autoComplete="password"
            value={password}
            onChange={handlePasswordChange}
            sx={{
              mt: 4,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              fontSize: 15,
              backgroundColor: color,
              "&:hover": {
                backgroundColor: color,
              },
            }}
            onClick={handleSubmit}
          >
            로그인 하기
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default SignIn;
