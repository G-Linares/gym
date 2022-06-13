import React from "react";
import { Box,Typography, Button } from "@mui/material";

import Hero from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" }
      }}
      position="realtive"
      p="20px"
    >
      <Typography color="#F07B7B" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Eat, Sweat <br />
        and Grind
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Mira los ejercicios mas eficientes.
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#F07B7B", padding: "10px" }}
      >
        {" "}
        Explora Ejercicios
      </Button>
      <Typography
        fontWeight={600}
        color="#F07B7B"
        sx={{
          opacity: 0.2,
          display: {
            lg: "block",
            xs: "none"
          }
        }}
        fontSize="100px"
        marginTop="30px"
      >
        We're all gonna make it
      </Typography>
      <img src={Hero} alt="hero banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
