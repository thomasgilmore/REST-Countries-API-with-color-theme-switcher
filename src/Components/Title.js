import React, { useContext } from 'react';
import { CountriesContext } from '../Context/Context';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Title() {
  const { darkMode, handleDarkMode } = useContext(CountriesContext);
  return (
    <div className='flex m-5 justify-between'>
      <Typography variant='h4'>Where in the world?</Typography>
      <Button onClick={handleDarkMode} variant="text">{darkMode ? <DarkModeIcon /> : <DarkModeOutlinedIcon />}Dark Mode</Button>
    </div>
  )
}
