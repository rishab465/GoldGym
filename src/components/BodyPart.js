import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: { lg: '270px', md: '200px', xs: '150px' }, height: { lg: '282px', md: '220px', xs: '180px' }, cursor: 'pointer', gap: { lg: '47px', xs: '20px' } } : { background: '#fff', borderBottomLeftRadius: '20px', width: { lg: '270px', md: '200px', xs: '150px' }, height: { lg: '282px', md: '220px', xs: '180px' }, cursor: 'pointer', gap: { lg: '47px', xs: '20px' } }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize={{ lg: '24px', xs: '14px' }} fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
