import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, useTheme } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        gap: { sm: '123px', xs: '16px' },
        mt: { sm: '32px', xs: '16px' },
        px: { sm: '20px', xs: '10px' },
      }}
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '44px', height: '44px', margin: '0px 10px' }} />
      </Link>
      <Stack
        direction="row"
        gap={{ sm: '40px', xs: '18px' }}
        fontFamily="Alegreya"
        fontSize={{ sm: '24px', xs: '16px' }}
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: theme.palette.text.primary, borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: theme.palette.text.primary }}>Exercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
