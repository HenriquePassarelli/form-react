import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form'
import {Container, Typography} from '@material-ui/core'
import 'fontsource-roboto'

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Register Form</Typography>
        <Form sendForm={sendForm} />
      </Container>
    )
  }
}

function sendForm(data){

}

export default App;
