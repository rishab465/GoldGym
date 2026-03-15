import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

import { getExerciseImageUrl } from '../utils/exerciseImages';
import { fetchData, youtubeOptions } from '../utils/fetchData';

const ExerciseCard = ({ exercise }) => {
  const [thumbUrl, setThumbUrl] = useState(null);

  useEffect(() => {
    const fetchThumb = async () => {
      try {
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
        const data = await fetchData(
          `${youtubeSearchUrl}/search?query=${encodeURIComponent(exercise.name)} exercise`,
          youtubeOptions,
        );

        const firstThumb = data?.contents?.[0]?.video?.thumbnails?.[0]?.url;
        if (firstThumb) setThumbUrl(firstThumb);
      } catch (error) {
        // If YouTube search fails, silently fall back to static image
      }
    };

    if (exercise?.name) {
      fetchThumb();
    }
  }, [exercise?.name]);

  const imageSrc = thumbUrl || getExerciseImageUrl(exercise);

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`} style={{ textDecoration: 'none' }}>
      <img
        src={imageSrc}
        alt={exercise.name}
        loading="lazy"
        style={{ width: '100%', objectFit: 'cover', borderRadius: '20px' }}
      />
      <Stack direction="row" sx={{ flexWrap: 'wrap', gap: '10px', mt: '10px' }}>
        <Button sx={{ ml: '0px', color: '#fff', background: '#FFA9A9', fontSize: { lg: '14px', xs: '12px' }, borderRadius: '20px', textTransform: 'capitalize', padding: '5px 15px' }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '0px', color: '#fff', background: '#FCC757', fontSize: { lg: '14px', xs: '12px' }, borderRadius: '20px', textTransform: 'capitalize', padding: '5px 15px' }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="0px"
        color="#222"
        fontWeight="bold"
        sx={{ fontSize: { lg: '20px', xs: '16px' }, wordBreak: 'break-word' }}
        mt="11px"
        pb="4px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
