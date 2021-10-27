import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import  useErrors  from "../hooks/useErrors";
import FormValidation from "../context/FromValidation";

function UserData({ toSendForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validations = useContext(FormValidation)
  const [error, fieldValidate, beforeSend] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (beforeSend()) {
          toSendForm({ email, password });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="Email"
        name="email"
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
        onBlur={fieldValidate}
        error={!error.password.valid}
        helperTest={error.password.text}
        id="password"
        label="Password"
        name="password"
        required
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Next
      </Button>
    </form>
  );
}

export default UserData;
