import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: '100px', xs: '24px' },
      width: '100%',
      backgroundImage: 'url(https://i.ytimg.com/vi/uoViNEyQvvY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAgycK2bxU4X2xvLwFsmjTFEOdGfw)',
      backgroundSize: { lg: 'contain', xs: 'cover' },
      backgroundPosition: { lg: 'right center', xs: 'center' },
      backgroundRepeat: 'no-repeat',
      height: { lg: '360px', xs: '260px' },
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
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        maxWidth: { lg: '420px', xs: '280px' },
        // Keep text readable but do not cover Gojo with a solid block
        bgcolor: 'transparent',
        borderRadius: 0,
        p: { lg: 0, xs: 0 },
        textShadow: '0 1px 3px rgba(0,0,0,0.9)',
      }}
    >
      <Typography color="#FF2625" fontWeight="600" fontSize={{ lg: '26px', xs: '20px' }}>
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '26px' } }} mb="20px" mt={{ lg: '30px', xs: '22px' }}>
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize={{ lg: '22px', xs: '14px' }} fontFamily="Alegreya" lineHeight={{ lg: '35px', xs: '22px' }}>
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack sx={{ mt: '18px' }}>
        <Button
          component="a"
          href="#exercises"
          sx={{
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
  </Box>
);

export default HeroBanner;
