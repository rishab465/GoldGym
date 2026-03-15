import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box
      sx={{
        marginTop: { lg: '140px', xs: '30px' },
        p: { lg: '20px', xs: '10px' },
        maxWidth: { lg: '1200px', xs: '100%' },
        mx: 'auto',
      }}
    >
      <Typography
        sx={{ fontSize: { lg: '40px', xs: '26px' }, color: '#fff' }}
        fontWeight={700}
        mb="28px"
      >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: 'row', xs: 'column' }, gap: { lg: '60px', md: '40px', xs: '24px' } }}
        justifyContent={{ lg: 'space-between', xs: 'center' }}
        flexWrap="wrap"
        alignItems="flex-start"
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img style={{ borderTopLeftRadius: '20px', maxWidth: '300px', width: '100%', height: 'auto' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '24px', xs: '16px' }, color: '#fff' }} fontWeight={600}>
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#b0b0b0">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
