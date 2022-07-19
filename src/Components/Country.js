import React, { useContext } from 'react';
import { CountriesContext } from '../Context/Context';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Typography from '@mui/material/Typography';

export default function Country() {
  const { darkMode, handleBackButton } = useContext(CountriesContext);
  const selectedCountry = JSON.parse(localStorage.getItem("selectedCountry"))[0];
  console.log(selectedCountry);
  return (
    <div>
      <Button onClick={handleBackButton} style={{ color: darkMode ? 'hsl(0, 0%, 100%)' :  'hsl(200, 15%, 8%)', backgroundColor: darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)', marginTop: 30, marginLeft: 50 }} variant="contained"><KeyboardBackspaceIcon /> Back</Button>
      <div className='flex flex-wrap space-x-10 m-10 justify-center'>
        <img src={selectedCountry.flag} style={{ width: '35%', minWidth: 300, maxWidth: 750, marginRight: 30, marginBottom: 20 }} alt={selectedCountry.flag} />
        <div className='m-auto'>
          <Typography style={{ fontWeight: 'bold', marginBottom: 10 }} color={darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'} variant='h3'>{selectedCountry.name}</Typography>
          <div className='flex'>
            <div className='flex flex-col mr-10 gap-2'>
              <Typography variant="body" color={darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}><b>Nativ Name:</b> {selectedCountry.nativeName}</Typography>
              <Typography variant="body" color={darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}><b>Population:</b> {selectedCountry.population}</Typography>
              <Typography variant="body" color={darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}><b>Region:</b> {selectedCountry.region}</Typography>
              <Typography variant="body" color={darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}><b>Sub Region:</b> {selectedCountry.subregion}</Typography>
              <Typography variant="body" color={darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}><b>Capital:</b> {selectedCountry.capital}</Typography>
            </div>
            <div className='flex flex-col gap-2'>
              <Typography variant="body" color={darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}><b>Top level Domain:</b> {selectedCountry.topLevelDomain[0]}</Typography>
              <Typography variant="body" color={darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}><b>Currencies:</b> {selectedCountry.currencies[0].name}</Typography>
              <Typography variant="body" color={darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}><b>Lanuages:</b> {selectedCountry.languages[0].name}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
