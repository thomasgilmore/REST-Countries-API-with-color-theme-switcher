import React, { useContext } from 'react';
import { CountriesContext } from '../Context/Context'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CountryCard({ img, name, population, region, capital }) {
  const { darkMode, handleSelectedCountryChange  } = useContext(CountriesContext);
  return (
    <Card name={name} onClick={handleSelectedCountryChange} sx={{ maxWidth: 300, backgroundColor: darkMode? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)' }}>
      <CardActionArea name={name}>
        <CardMedia
          component="img"
          name={name}
          // height="140"
          image={img}
          alt=""
          style={{ height: 230, objectFit: 'contain' }}
        />
        <CardContent name={name}>
          <Typography gutterBottom variant="h5" component="div" name={name}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" name={name}>
            Population: {population}
          </Typography>
          <Typography variant="body2" color="text.secondary" name={name}>
            Region: {region}
          </Typography>
          <Typography variant="body2" color="text.secondary" name={name}>
            Capital: {capital}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
