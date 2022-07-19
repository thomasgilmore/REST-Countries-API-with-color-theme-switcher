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
      <Button onClick={handleBackButton} style={{ color: darkMode ? 'hsl(0, 0%, 100%)' :  'hsl(200, 15%, 8%)', backgroundColor: darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)' }} variant="contained"><KeyboardBackspaceIcon /> Back</Button>
      <div className='flex flex-wrap'>
        <img src={selectedCountry.flag} alt={selectedCountry.flag} />
        <div>
          <Typography style={{ fontWeight: 'bold' }} variant='h3'>{selectedCountry.name}</Typography>
          <div className='flex'>
            <div>
              <Typography variant="body2" color="text.secondary"><b>Nativ Name:</b> {selectedCountry.nativeName}</Typography>
              <Typography variant="body2" color="text.secondary"><b>Population:</b> {selectedCountry.population}</Typography>
              <Typography variant="body2" color="text.secondary"><b>Region:</b> {selectedCountry.region}</Typography>
              <Typography variant="body2" color="text.secondary"><b>Sub Region:</b> {selectedCountry.subregion}</Typography>
              <Typography variant="body2" color="text.secondary"><b>Capital:</b> {selectedCountry.capital}</Typography>
            </div>
            <div>
              <Typography variant="body2" color="text.secondary"><b>Top level Domain:</b> {selectedCountry.topLevelDomain[0]}</Typography>
              <Typography variant="body2" color="text.secondary"><b>Currencies:</b> {selectedCountry.currencies[0].name}</Typography>
              <Typography variant="body2" color="text.secondary"><b>Lanuages:</b> {selectedCountry.languages[0].name}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
