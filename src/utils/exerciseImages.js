// Simple helper to provide a visual image for each exercise
// since the current ExerciseDB endpoint no longer returns gifUrl.

// More granular images by target muscle when available
const targetImages = {
  abs: 'https://images.pexels.com/photos/3837781/pexels-photo-3837781.jpeg?auto=compress&cs=tinysrgb&w=1200',
  waist: 'https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&cs=tinysrgb&w=1200',
  quads: 'https://images.pexels.com/photos/6455828/pexels-photo-6455828.jpeg?auto=compress&cs=tinysrgb&w=1200',
  glutes: 'https://images.pexels.com/photos/8660239/pexels-photo-8660239.jpeg?auto=compress&cs=tinysrgb&w=1200',
  lats: 'https://images.pexels.com/photos/7674480/pexels-photo-7674480.jpeg?auto=compress&cs=tinysrgb&w=1200',
  biceps: 'https://images.pexels.com/photos/6456235/pexels-photo-6456235.jpeg?auto=compress&cs=tinysrgb&w=1200',
  triceps: 'https://images.pexels.com/photos/6456277/pexels-photo-6456277.jpeg?auto=compress&cs=tinysrgb&w=1200',
  calves: 'https://images.pexels.com/photos/6455987/pexels-photo-6455987.jpeg?auto=compress&cs=tinysrgb&w=1200',
  delts: 'https://images.pexels.com/photos/3837780/pexels-photo-3837780.jpeg?auto=compress&cs=tinysrgb&w=1200',
  traps: 'https://images.pexels.com/photos/1552107/pexels-photo-1552107.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

// Fallback by body part
const bodyPartImages = {
  chest: 'https://images.pexels.com/photos/3837781/pexels-photo-3837781.jpeg?auto=compress&cs=tinysrgb&w=1200',
  back: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1200',
  legs: 'https://images.pexels.com/photos/4761353/pexels-photo-4761353.jpeg?auto=compress&cs=tinysrgb&w=1200',
  shoulders: 'https://images.pexels.com/photos/6456229/pexels-photo-6456229.jpeg?auto=compress&cs=tinysrgb&w=1200',
  arms: 'https://images.pexels.com/photos/3837780/pexels-photo-3837780.jpeg?auto=compress&cs=tinysrgb&w=1200',
  core: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1200',
  waist: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cardio: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const getExerciseImageUrl = (exercise = {}) => {
  const target = (exercise.target || '').toLowerCase();
  if (target && targetImages[target]) {
    return targetImages[target];
  }

  const bodyPart = (exercise.bodyPart || '').toLowerCase();
  if (bodyPart && bodyPartImages[bodyPart]) {
    return bodyPartImages[bodyPart];
  }

  // Fallback generic fitness image
  return 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1200';
};
