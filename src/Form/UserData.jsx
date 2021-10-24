import React from "react";
import { TextField, Button } from "@material-ui/core";

function UserData() {
  return (
    <form>
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="password"
        label="Password"
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
