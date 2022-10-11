import { AppBar, Button, Input, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function StateLess() {
    const [value, setValue] = useState('Home')
    const [age, setAge] = useState(20)
    function handelChange(e){
        setValue(e.target.value)
    }
    useEffect(() => {
        console.log("Value effect");
        document.title = value
    }, [value])
    useEffect(() => {
        console.log("Age effect");
    }, [age])
    function incrementNumber(){
        setAge(age +1)
    }
    function decrementNumber(){
        setAge(age-1)
    }
  return (
    <>
        <AppBar position='static'>
        <Toolbar>
            <Typography variant='h6'>
                <Input value={value}
                onChange = {handelChange}>
                </Input>

            </Typography>
        </Toolbar>
    </AppBar>
    <Typography variant='h6'>
        Age : {age}        
    </Typography>
    <Button
    color='primary'
    onClick={incrementNumber}>
        Increment
    </Button>
    <Button
    color='primary'
    onClick={decrementNumber}>
        Decrement
    </Button>
    </>
  )
}
