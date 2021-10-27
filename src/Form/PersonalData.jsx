import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import useErrors from "../hooks/useErrors";
import FormValidation from "../context/FromValidation";

function PersonalData({ toSendForm }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(true);

  const validations = useContext(FormValidation);
  const [error, fieldValidate, beforeSend] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (beforeSend()) {
          toSendForm({ name, lastName, cpf, promotions, news });
        }
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="name"
        label="Name"
        name="name"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        id="lastName"
        label="Last Name"
        name="lastName"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={fieldValidate}
        error={!error.cpf.valid}
        helperTest={error.cpf.text}
        id="cpf"
        label="CPF"
        name="cpf"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promotions"
        control={
          <Switch
            name="promotions"
            checked={promotions}
            defaultChecked={promotions}
            color="primary"
            onChange={(event) => {
              setPromotions(event.target.checked);
            }}
          />
        }
      />
      <FormControlLabel
        label="News"
        control={
          <Switch
            name="news"
            checked={news}
            defaultChecked={news}
            color="primary"
            onChange={(event) => {
              setNews(event.target.checked);
            }}
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Next
      </Button>
    </form>
  );
}

export default PersonalData;
