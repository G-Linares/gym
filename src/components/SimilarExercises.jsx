import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";

import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Ejercicios enfocados en la misma área de músculos
        <Stack direction="row" sx={{ p: "2", position: "relative" }}mt={2}>
          {targetMuscleExercises.length ? (
            <HorizontalScrollbar data={targetMuscleExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Typography>
      <Typography variant="h3" mb={5}>
        Ejercicios que ocupan el mismo equipment
        <Stack direction="row" sx={{ p: "2", position: "relative" }} mt={2}>
          {equipmentExercises.length ? (
            <HorizontalScrollbar data={equipmentExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Typography>
    </Box>
  );
};

export default SimilarExercises;
