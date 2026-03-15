import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import { getExerciseImageUrl } from '../utils/exerciseImages';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: { lg: '20px', xs: '10px' }, alignItems: 'center', justifyContent: 'center' }}>
      <img
        src={getExerciseImageUrl({ bodyPart, gifUrl })}
        alt={name}
        loading="lazy"
        className="detail-image"
        style={{ maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '20px' }}
      />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' }, flex: 1 }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '36px' }, color: '#fff' }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '16px' }, color: '#e0e0e0', lineHeight: '1.6' }}>
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy. Train like strongest.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: { lg: '100px', xs: '80px' }, height: { lg: '100px', xs: '80px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '18px' }, color: '#fff' }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
