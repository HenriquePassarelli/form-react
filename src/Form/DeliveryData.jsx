import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DeliveryData({toSendForm}) {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        toSendForm({ cep, address, number, state, city });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        label="CEP"
        required
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
        id="address"
        label="Address"
        required
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
        id="number"
        label="Number"
        required
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
        id="state"
        label="State"
        required
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
        id="city"
        label="City"
        required
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </form>
  );
}

export default DeliveryData;
