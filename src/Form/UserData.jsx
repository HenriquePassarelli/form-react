import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function UserData({toSendForm}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        toSendForm({email,password})
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="Email"
        required
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        id="password"
        label="Password"
        required
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}

export default UserData;
