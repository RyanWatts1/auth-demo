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

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const signup = () => {
    console.log(form);

    setForm({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Card>
      <Typography variant="h5">Signup</Typography>
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
      <TextField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={form.password}
        onChange={handleChange}
      />
      <Button onClick={signup} variant="contained">
        Create Account
      </Button>
      <Typography align="center">
        Already have an account?{" "}
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
