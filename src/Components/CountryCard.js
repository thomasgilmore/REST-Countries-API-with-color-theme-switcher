import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CountryCard({ img, name, population, region, capital }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
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
