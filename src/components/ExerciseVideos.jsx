import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  const displayedVideos = 6;
  if(!exerciseVideos.length) return 'Loading...'
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Mira videos de como hacer un{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {" "}
          {name}{" "}
        </span>
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" }
        }}
      >
        {exerciseVideos?.slice(0, displayedVideos).map((item, index) => (
          <a
            key={index + new Date()}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;