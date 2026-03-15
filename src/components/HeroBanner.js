import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: '100px', xs: '24px' },
      width: '100%',
      backgroundImage: 'url(https://i.ytimg.com/vi/uoViNEyQvvY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAgycK2bxU4X2xvLwFsmjTFEOdGfw)',
      backgroundSize: 'contain',
      backgroundPosition: 'right center',
      backgroundRepeat: 'no-repeat',
      height: { lg: '360px', xs: '210px' },
      borderRadius: '20px',
      position: 'relative',
      p: '20px',
      color: 'white',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '20px',
      },
    }}
    position="relative"
  >
    <Typography color="#FF2625" fontWeight="600" fontSize={{ lg: '26px', xs: '20px' }} sx={{ position: 'relative', zIndex: 1 }}>
      Fitness Club
    </Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '26px' }, position: 'relative', zIndex: 1 }} mb="20px" mt={{ lg: '30px', xs: '22px' }}>
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize={{ lg: '22px', xs: '14px' }} fontFamily="Alegreya" lineHeight={{ lg: '35px', xs: '24px' }} sx={{ position: 'relative', zIndex: 1 }}>
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack sx={{ position: 'relative', zIndex: 1, mt: '20px' }}>
      <Button
        component="a"
        href="#exercises"
        sx={{
          mt: { lg: '25px', xs: '18px' },
          textDecoration: 'none',
          width: { lg: '200px', sm: '180px', xs: '160px' },
          alignSelf: 'flex-start',
          background: '#FF2625',
          px: { lg: '20px', xs: '16px' },
          py: { lg: '14px', xs: '10px' },
          fontSize: { lg: '18px', xs: '14px' },
          textTransform: 'none',
          color: 'white',
          borderRadius: '4px',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: '#FF4444',
          },
        }}
      >
        Explore Exercises
      </Button>
    </Stack>
  </Box>
);

export default HeroBanner;
