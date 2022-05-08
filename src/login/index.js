import styled from "styled-components";
import {
  Card as MuiCard,
  Button,
  Link,
  Typography,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <Card>
      <Typography variant="h5">Sign in</Typography>
      <TextField label="Email" type="email" />
      <TextField label="Password" type="password" />
      <Button variant="contained">Login</Button>
      <Typography align="center">
        Don't have an account?{" "}
        <Link onClick={() => navigate("/register")}>Register </Link>{" "}
      </Typography>
    </Card>
  );
}

const Card = styled(MuiCard)`
  width: 500px;
  display: grid;
  grid-gap: 2em;
  padding: 2em;
`;
