import React, { useContext } from 'react';
import { CountriesContext } from '../Context/Context';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input } from '@mui/material';

export default function Filter() {
  const { handleSearchSubmit, region, handleSelectRegionSearch, darkMode } = useContext(CountriesContext);

  return (
    <div className='flex m-5 justify-between'>
    <div className='flex items-center rounded-lg p-1 border-2' style={{ backgroundColor : darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)', width: '40%', minWidth: 275, maxWidth: 400 }}>
      <SearchIcon style={{ color : darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 52%)',  }} />
      <Input className='m-1' onChange={handleSearchSubmit} style={{ backgroundColor : darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)', width: '100%' }} placeholder='Search for a country...'/>
    </div>
      <FormControl style={{ width: 200, backgroundColor : darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)' }}>
        <InputLabel style={{ color : darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 52%)' }} id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          label="region"
          onChange={handleSelectRegionSearch}
          style={{ color : darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 52%)' }}
        >
          <MenuItem style={{ backgroundColor : darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)' }} value=""><em>None</em></MenuItem>
          <MenuItem style={{ backgroundColor : darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)' }} value="Africa">Africa</MenuItem>
          <MenuItem style={{ backgroundColor : darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)' }} value="Americas">Americas</MenuItem>
          <MenuItem style={{ backgroundColor : darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)' }} value="Asia">Asia</MenuItem>
          <MenuItem style={{ backgroundColor : darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)' }} value="Europe">Europe</MenuItem>
          <MenuItem style={{ backgroundColor : darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)' }} value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
