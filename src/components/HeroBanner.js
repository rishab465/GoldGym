import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: '100px', xs: '30px' },
      width: '100%',
      backgroundImage: 'url(https://i.ytimg.com/vi/uoViNEyQvvY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAgycK2bxU4X2xvLwFsmjTFEOdGfw)',
      backgroundSize: 'contain',
      backgroundPosition: 'right center',
      backgroundRepeat: 'no-repeat',
      height: { lg: '360px', xs: '220px' },
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
    <Typography color="#FF2625" fontWeight="600" fontSize="26px" sx={{ position: 'relative', zIndex: 1 }}>Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '28px' }, position: 'relative', zIndex: 1 }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize={{ lg: '22px', xs: '16px' }} fontFamily="Alegreya" lineHeight="35px" sx={{ position: 'relative', zIndex: 1 }}>
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack sx={{ position: 'relative', zIndex: 1, mt: '20px' }}>
      <a href="#exercises" style={{ marginTop: '25px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px 20px', fontSize: '18px', textTransform: 'none', color: 'white', borderRadius: '4px', fontWeight: 'bold', transition: 'all 0.3s ease', cursor: 'pointer', display: 'inline-block' }} onMouseEnter={(e) => { e.target.style.backgroundColor = '#FF4444'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = '#FF2625'; }}>
        Explore Exercises
      </a>
    </Stack>
  </Box>
);

export default HeroBanner;
