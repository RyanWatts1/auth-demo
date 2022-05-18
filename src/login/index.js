import styled from "styled-components";
import {
  Card as MuiCard,
  Button,
  Link,
  Typography,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";    

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const login = () => {
    console.log(form);

    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <Card>
      <Typography variant="h5">Sign in</Typography>
      <TextField
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <Button onClick={login} variant="contained">
        Login
      </Button>
      <Typography align="center">
        Don't have an account?{" "}
        <Link onClick={() => navigate("/register")}>Register </Link>{" "}
      </Typography>
      <Typography align="center">
        <Link onClick={() => navigate("/change-password")}>
          Forgot Password
        </Link>
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
