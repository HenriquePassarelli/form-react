import React from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function form() {
  return (
    <form>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="lastName"
        label="Last Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promotions"
        control={
          <Switch name="promotions" defaultChecked="true" color="primary" />
        }
      />
      <FormControlLabel
        label="News"
        control={
          <Switch name="news" defaultChecked="true" color="primary" />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}

export default form;
