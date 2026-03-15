import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      background: '#fff',
      borderRadius: '18px',
      width: { lg: '270px', md: '210px', xs: '130px' },
      height: { lg: '282px', md: '220px', xs: '150px' },
      cursor: 'pointer',
      gap: { lg: '32px', xs: '16px' },
      boxShadow: '0 6px 14px rgba(0,0,0,0.12)',
      borderTop: bodyPart === item ? '4px solid #FF2625' : '4px solid transparent',
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize={{ lg: '24px', xs: '14px' }} fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
