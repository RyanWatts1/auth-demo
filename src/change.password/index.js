import styled from "styled-components";
import {
  Card as MuiCard,
  Button,
  Link,
  Typography,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const navigate = useNavigate();
  return (
    <Card>
      <Typography variant="h5">Forgot Password?</Typography>
      <TextField label="Email" type="email" />
      <Button variant="contained">Send email</Button>
      <Typography align="center">
       Back to {" "}
        <Link onClick={() => navigate("/")}>Login </Link>{" "}
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
