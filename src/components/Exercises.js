import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        let exercisesData = [];

        if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }

        setExercises(exercisesData);
      } catch (error) {
        // Fallback mock data so the app still shows content
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

        const filteredFallback = bodyPart === 'all'
          ? fallbackExercises
          : fallbackExercises.filter((ex) => ex.bodyPart === bodyPart);

        setExercises(filteredFallback);
      }
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px"><Loader /></Box>;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px', xs: '50px' }, p: { lg: '20px', xs: '10px' } }}>
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '28px' }, textAlign: 'center' }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '50px', md: '30px', xs: '20px' }, mb: { lg: '60px', xs: '40px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, idx) => (
          <Box key={idx} sx={{ width: { lg: 'auto', md: 'calc(50% - 15px)', xs: '100%' }, maxWidth: '350px' }}>
            <ExerciseCard exercise={exercise} />
          </Box>
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 6 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            sx={{ '& .MuiPaginationItem-root': { color: '#fff' } }}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;

