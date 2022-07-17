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
    <div className='flex p-5 justify-between' style={{ backgroundColor: darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)' }}>
      <Typography style={{ color : darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)' }} variant='h4'>Where in the world?</Typography>
      <Button className='darkModeButton' onClick={handleDarkMode} style={{ color: darkMode ? 'hsl(0, 0%, 100%)' :  'hsl(200, 15%, 8%)' }} variant="text">{darkMode ? <DarkModeIcon className='mr-2' /> : <DarkModeOutlinedIcon className='mr-2' />}Dark Mode</Button>
    </div>
  )
}
