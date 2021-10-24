import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form'
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Register Form</Typography>
        <Form sendForm={sendForm} validateCpf={validateCpf} />
      </Container>
    )
  }
}

function sendForm(data) {

}

function validateCpf(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, text: "Cpf must have 11 digits" }
  } else {
    return { valid: true, text: "" }
  }
}

export default App;
