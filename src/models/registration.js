function validateCpf(cpf) {
    if (cpf.length !== 11) {
        return { valid: false, text: "Cpf must have 11 digits" }
    } else {
        return { valid: true, text: "" }
    }
}

function validatePassword(password) {
    if (password.length < 6) {
        return { valid: false, text: "password must be more than 7 characters " }
    } else {
        return { valid: true, text: "" }
    }
}

export {validatePassword, validateCpf}