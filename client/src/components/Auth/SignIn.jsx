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
import LockIcon from "@mui/icons-material/Lock";
import { indigo } from "@mui/material/colors";

import logo from "../../assets/Images/logo.png";

const SignIn = ({ loginHandler }) => {
  const color = indigo[500];
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="logo" className="w-[75px] mt-24 mb-20"></img>
          <Typography
            variant="h6"
            align="left"
            sx={{
              width: "100%",
              marginBottom: "20px",
            }}
          >
            Welcome!
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
                  <LockIcon />
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
              mt: 7,
              mb: 2,
              fontSize: 12,
              height: "50px",
              backgroundColor: color,
              "&:hover": {
                backgroundColor: color,
              },
              borderRadius: "10px",
            }}
            onClick={loginHandler}
          >
            Login
          </Button>
          <Typography
            variant="body2"
            sx={{
              width: "100%",
              textAlign: "center",
              marginTop: "16px",
              fontSize: "14px",
            }}
          >
            Don't have an account?{"  "}
            <Typography component="span" color="primary">
              Sign up
            </Typography>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default SignIn;
