import React from 'react';

const FromValidation = React.createContext(
    { cpf: validateCpf, password: validatePassword }

)



export default FromValidation