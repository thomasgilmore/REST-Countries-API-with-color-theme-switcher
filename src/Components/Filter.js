import React, { useContext } from 'react';
import { CountriesContext } from '../Context/Context';
import { styled } from '@mui/system';
import InputUnstyled from '@mui/base/InputUnstyled';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input } from '@mui/material';

export default function Filter() {
  const { handleInputChange, handleSearchSubmit, region, handleRegionChange, handleSelectRegionSearch, darkMode } = useContext(CountriesContext);

  const StyledInputElement = styled('input')(
    ({ theme }) => `
    width: 200px;
    border: 1px solid gray;
    border-radius: 8px;
    padding: 10px;
    `
  )

  return (
    <div className='flex m-5 justify-between'>
    <div className='flex items-center rounded-lg p-1 border-2'>
      <SearchIcon style={{ color : darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 52%)' }} />
      <Input className='m-1' onChange={handleSearchSubmit} style={{ backgroundColor : darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)' }} placeholder='Search for a country...'/>
    </div>
      <FormControl sx={{ width: 200, backgroundColor : darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)' }}>
        <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          label="Region"
          onChange={handleSelectRegionSearch}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Americas">Americas</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
