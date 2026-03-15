import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '90px', xs: '24px' }, px: { lg: 0, xs: '20px' } }}>
    {/* Title above the image so Gojo's face is clear */}
    <Typography
      color="#FF2625"
      fontWeight="600"
      fontSize={{ lg: '26px', xs: '20px' }}
      mb={{ lg: '10px', xs: '8px' }}
    >
      Fitness Club
    </Typography>

    {/* Gojo image banner */}
    <Box
      sx={{
        width: '100%',
        backgroundImage:
          'url(https://i.ytimg.com/vi/uoViNEyQvvY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAgycK2bxU4X2xvLwFsmjTFEOdGfw)',
        backgroundSize: { lg: 'contain', xs: 'cover' },
        backgroundPosition: { lg: 'right center', xs: 'center' },
        backgroundRepeat: 'no-repeat',
        height: { lg: '360px', xs: '260px' },
        borderRadius: '20px',
        position: 'relative',
        color: 'white',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.15)',
          borderRadius: '20px',
        },
      }}
    />

    {/* Text and button below the image */}
    <Stack spacing={{ lg: 1.8, xs: 1.4 }} mt={{ lg: '22px', xs: '18px' }}>
      <Button
        component="a"
        href="#exercises"
        sx={{
          alignSelf: 'flex-start',
          background: '#FF2625',
          px: { lg: '24px', xs: '20px' },
          py: { lg: '12px', xs: '10px' },
          fontSize: { lg: '18px', xs: '16px' },
          textTransform: 'none',
          color: 'white',
          borderRadius: '999px',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: '#FF4444',
          },
        }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontSize={{ lg: '22px', xs: '14px' }}
        fontFamily="Alegreya"
        lineHeight={{ lg: '35px', xs: '22px' }}
      >
        Check out the most effective exercises personalized to you
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '26px' } }}
        mt={{ lg: '10px', xs: '6px' }}
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
    </Stack>
  </Box>
);

export default HeroBanner;
