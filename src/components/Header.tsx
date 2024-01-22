/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link
              to="/"
              style={{
                letterSpacing: "1px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              LinguaQuest.
            </Link>
          </Typography>

          {/* Home Link */}
          <Button
            sx={{ fontWeight: "700", letterSpacing: "1px" }}
            color="inherit"
            component={Link}
            to="/"
          >
            Home
          </Button>

          {/* Login Link */}

          <Button
            sx={{ fontWeight: "700", letterSpacing: "1px" }}
            color="inherit"
            component={Link}
            to="/login"
          >
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
