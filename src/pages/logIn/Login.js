import { styled } from "@mui/material/styles";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../../components/userDetails/SignUpForm";

const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  justifyContent: "center",
  alignItems: "center",
}));

function Login() {
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ height: "100vh", display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "1200px", margin: "0 auto", alignSelf: "center" }}>
        <StyledStack direction="row" spacing={{ xs: 0, sm: 20 }}>
          <Stack>
            <Typography variant="h2">JaMclef</Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="h6">Login</Typography>
            <TextField label="Email" variant="outlined"></TextField>
            <TextField label="Password" variant="outlined"></TextField>
            <Stack direction="row" spacing={3}>
              <Button aria-label="login" variant="contained">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/user/:id/feed"
                >
                  Login
                </Link>
              </Button>
              <Button
                aria-label="login"
                variant="contained"
                onClick={() => setOpen(true)}
              >
                SignUP
              </Button>
              <SignUpForm open={open} setOpen={setOpen} />
            </Stack>
          </Stack>
        </StyledStack>
      </Box>
    </Box>
  );
}

export default Login;
