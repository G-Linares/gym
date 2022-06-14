import React from 'react'
import {Stack, Typography} from "@mui/material";
import Icon from '../assets/images/icon.png'
// importa todas los iconos

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack 
      type="button"
      alignItems="center"
      justifyContent="center"
      className='bodyPart-card'
      sx={{
          borderTop: bodyPart === item ? '4px solid #ff2625' : '',
          backgroundColor: '#fff',
          borderBottomLeftRadius: '20px',
          width:'270px',
          height:'280px',
          cursor:"pointer",
          gap:'47px',

      }}
    >
      <img src={Icon} alt="dumbbell" style={{width:'80px',height:'80px'}}/>
      <Typography>{item}</Typography>
    </Stack>
  )
}

export default BodyPart