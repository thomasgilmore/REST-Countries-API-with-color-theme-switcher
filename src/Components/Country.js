import React, { useContext } from 'react';
import { CountriesContext } from '../Context/Context';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function Country() {
  const { handleBackButton } = useContext(CountriesContext);
  const selectedCountry = JSON.parse(localStorage.getItem("selectedCountry"));
  console.log(selectedCountry);
  return (
    <div>
      <Button onClick={handleBackButton} variant="contained"><KeyboardBackspaceIcon /> Back</Button>

    </div>
  )
}
