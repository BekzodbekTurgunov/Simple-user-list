import React, { useState, useEffect } from 'react'
import { TextField } from '@mui/material'
import { handleBreakpoints } from '@mui/system'

function useForm(initialValue) {
    const [value,setValue] = useState(initialValue)
    return {value,onChange: e => setValue(e.target.value)
    }
}
export default function Form(props) {
    console.log("Form function");
    const username = useForm('')
    const email = useForm('')
    const password = useForm('')
  return (
    <>
        <Input
            name="username"
            label="Username"
            {...username}
        />
         <Input
            name="Email"
            label="Email"
            {...email}
        />
         <Input
            name="password"
            label="Password"
            value={password.value}
            type="password"
            onChange = {password.onChange}
        />
    </>
  )
}


function Input(props) {
    console.log("Input function called");
    return(
        <>
            <TextField
                {...props}
                margin="normal"
                size='medium'
                variant = 'outlined'
                type={props.type || 'text'}
            /> <br/>
        </>
    )
}