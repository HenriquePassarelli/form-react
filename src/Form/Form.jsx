import React from "react";
import PersonalData from "./PersonalData";
import UserData from "./UserData";

function Form(sendForm, validateCpf) {
  return (
    <>
      <PersonalData sendForm={sendForm} validateCpf={validateCpf} />
      <UserData />
    </>
  );
}

export default Form;
