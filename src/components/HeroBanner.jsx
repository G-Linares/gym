import React from 'react'
import {Box, Stack, Typography, Button} from "@mui/material";

import Hero from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{ lg:'212px', xs:'70px'},
        ml:{ sm:'50px'}
    }} position="realtive" p="20px">
        <Typography color="#F07B7B" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight="700" sx={{ fontSize:{lg:'44px', xs:'40px'}}}>
            Eat, Sweat <br/>and Grind
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={3}>
            Mira los ejercicios mas eficientes.
        </Typography>
        <Button variant='contained' color='error' href="#exercises"> Explora Ejercicios</Button>
        <img src={Hero} alt="hero banner image" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner