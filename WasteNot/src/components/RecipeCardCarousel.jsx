import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RecipeCard from './RecipeCard';

export default function RecipeCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState([]);

//   getting recipes
  useEffect(() => {
    const getSteps = async () => {
        try {
            const response = await api.get();
            setSteps(response.data);
        } catch(error){
            console.error('There was an error getting your recipes:', error);
        }
    };

    getSteps();
  }, []);

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{clickable: true}}
        onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
      >
        {steps.map((stepData, index) => (
          <SwiperSlide key={index}>
            <RecipeCard data={stepData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
