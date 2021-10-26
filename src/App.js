import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form'
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'
import { validateCpf, validatePassword } from './models/registration'

import FromValidation from './context/FromValidation'
class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Register Form</Typography>
        <FromValidation value={{ cpf: validateCpf, password: validatePassword }} >
          <Form toSendForm={sendForm} />
        </FromValidation>
      </Container >
    )
  }
}

function sendForm(data) {
  console.log(data)
}



export default App;
