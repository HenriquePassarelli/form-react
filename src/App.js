import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form'
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'
import { validateCpf, validatePassword } from './models/registration'

import FormValidation from './context/FromValidation'
class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Register Form</Typography>
        <FormValidation.Provider value={{ cpf: validateCpf, password: validatePassword, name: validatePassword }} >
          <Form toSendForm={sendForm} />
        </FormValidation.Provider>
      </Container >
    )
  }
}

function sendForm(data) {
  console.log(data)
}


export default App;
