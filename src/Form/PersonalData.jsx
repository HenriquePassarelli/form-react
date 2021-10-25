import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function PersonalData(props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(true);
  const [error, setError] = useState({ cpf: { valid: true, text: "" } });

  const { toSendForm, validateCpf } = props;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        toSendForm({ name, lastName, cpf, promotions, news });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="name"
        label="Name"
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
        onBlur={() => {
          const isValid = validateCpf(cpf);

          setError({ cpf: isValid });
        }}
        error={!error.cpf.valid}
        helperTest={error.cpf.text}
        id="cpf"
        label="CPF"
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
        Register
      </Button>
    </form>
  );
}

export default PersonalData;
