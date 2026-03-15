import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        setBodyParts(['all', ...bodyPartsData]);
      } catch (error) {
        // Fallback list so the horizontal scrollbar still works
        setBodyParts(['all', 'chest', 'back', 'legs', 'shoulders', 'arms', 'core', 'neck', 'waist', 'cardio']);
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    const normalized = search.trim().toLowerCase();

    if (normalized) {
      try {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

        const searchedExercises = exercisesData.filter(
          (item) => item.name.toLowerCase().includes(normalized)
                 || item.target.toLowerCase().includes(normalized)
                 || item.equipment.toLowerCase().includes(normalized)
                 || item.bodyPart.toLowerCase().includes(normalized),
        );

        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

        setSearch('');
        setExercises(searchedExercises);
      } catch (error) {
        // Fallback mock data so search still returns exercises with images
        const fallbackExercises = [
          {
            id: '0001',
            bodyPart: 'chest',
            equipment: 'body weight',
            gifUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80',
            name: 'push up',
            target: 'pectorals',
          },
          {
            id: '0002',
            bodyPart: 'back',
            equipment: 'body weight',
            gifUrl: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=1000&q=80',
            name: 'pull up',
            target: 'lats',
          },
          {
            id: '0003',
            bodyPart: 'legs',
            equipment: 'body weight',
            gifUrl: 'https://images.unsplash.com/photo-1434608519344-49d77bba6f3a?auto=format&fit=crop&w=1000&q=80',
            name: 'squat',
            target: 'glutes',
          },
          {
            id: '0004',
            bodyPart: 'shoulders',
            equipment: 'dumbbell',
            gifUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1000&q=80',
            name: 'shoulder press',
            target: 'delts',
          },
          {
            id: '0005',
            bodyPart: 'arms',
            equipment: 'body weight',
            gifUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=1000&q=80',
            name: 'bicep curl',
            target: 'biceps',
          },
          {
            id: '0006',
            bodyPart: 'core',
            equipment: 'body weight',
            gifUrl: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1000&q=80',
            name: 'plank',
            target: 'abs',
          },
        ];

        const searchedFallback = fallbackExercises.filter(
          (item) => item.name.toLowerCase().includes(normalized)
                 || item.target.toLowerCase().includes(normalized)
                 || item.equipment.toLowerCase().includes(normalized)
                 || item.bodyPart.toLowerCase().includes(normalized),
        );
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        setExercises(searchedFallback);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px" sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <TextField
          height="76px"
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '40px',
              fontSize: { lg: '18px', xs: '14px' },
              color: '#000',
            },
            '& fieldset': {
              borderRadius: '40px',
              borderColor: 'transparent',
            },
            width: { lg: '1170px', md: '800px', sm: '500px', xs: '100%' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', md: '150px', xs: '90px' },
            height: '56px',
            position: 'absolute',
            right: '6px',
            zIndex: 2,
            fontSize: { lg: '20px', xs: '12px' },
            borderRadius: '40px',
            '&:hover': { bgcolor: '#FF4444' },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
