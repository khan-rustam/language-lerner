// Login.tsx
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Grid
        container
        spacing={5}
        style={{ marginTop: "20px", placeItems: "center" }}
      >
        {/* Login Form */}
        <Grid item xs={12} sm={6}>
          <Paper
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              textAlign={"center"}
              fontSize={"2rem"}
              textTransform={"uppercase"}
              letterSpacing={"2px"}
            >
              Login
            </Typography>
            <form
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                name="email"
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                onClick={() => navigate("/")}
              >
                Log in
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Content */}
        <Grid
          item
          xs={12}
          sm={6}
          style={{ padding: "20px", textAlign: "center" }}
        >
          <img
            width={"95%"}
            height={"100%"}
            src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?w=996&t=st=1705865396~exp=1705865996~hmac=502497faf00b855a70699b6b9b6740fe040591f4ac42a04baf79a45b68902298"
            alt="Login Image"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
