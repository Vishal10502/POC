import { Box, TextField } from '@mui/material'
import React from 'react'

const SSOInput = () => {
    // const[value,setValue]=useState(" ");
    // const[showError,setShowError]=useState("")
    //     const handleChange=(e)=>{
    //     const newValue = e.target.value
    //     if(newValue.length> 150){
    //         setShowError("Character Limit Exceeded")
    //     }
    //     else{
    //         setShowError("")
    //     }

    //     setValue(newValue);}
  return (
        <Box
        
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
      className='login-section'
      id="outlined-helper-text"
      label="Login"
    //   value={value}
    //   onChange={handleChange}
    //   helperText={showError||"Characters Limit-150"}
      inputProps={{maxLength:150}}
      >
      </TextField>
      </Box>
  )
}

export default SSOInput
