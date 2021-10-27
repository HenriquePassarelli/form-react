import React, { useState } from 'react';

function useErrors(validate) {
    const initialState = createInitialState(validate)
    const [error, setError] = useState(initialState);

    function fieldValidate(event) {
        const { name, value } = event.target;
        const newState = { ...error };
        newState[name] = validate[name](value);
        setError(newState);
    }


    function beforeSend() {
        for (let field in error) {
            if (!error[field].valid) {
                return false;
            }
        }
        return true;
    }

    return [error, fieldValidate, beforeSend]
}


function createInitialState(validate) {
    const initialState = {}
    for (let field in validate) {
        initialState[field] = { valid: true, text: "" };
    }

    return initialState;
}


export default useErrors