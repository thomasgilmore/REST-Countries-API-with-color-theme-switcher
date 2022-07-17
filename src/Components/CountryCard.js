import React, { useContext } from 'react';
import { CountriesContext } from '../Context/Context'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CountryCard({ img, name, population, region, capital }) {
  const { darkMode  } = useContext(CountriesContext);
  return (
    <Card sx={{ maxWidth: 300, backgroundColor: darkMode? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Population: {population}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Region: {region}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Capital: {capital}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
