import React from 'react'
import {Stack, Typography} from "@mui/material";
// import Icon from '../assets/images/icon.png'
// importa todas los iconos

const BodyPart = ({item, setBodyPart, bodyPart}) => {

  const image = require(`../assets/images/${item}.png`);
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
      onClick ={() => {
        setBodyPart(item);
        window.scrollTo({top:1800,left:100, behavior:'smooth'})
      }}
    >
      <img src={image} alt="body part" style={{width:'60px',height:'60px'}}/>
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart