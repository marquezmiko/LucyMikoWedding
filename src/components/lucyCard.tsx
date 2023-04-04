import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function LucyCard() {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/Ollie.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lucy
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hi! I'm Lucy.
          <br />
          I'm cool, pretty, fit, and all around great!
        </Typography>
      </CardContent>
    </Card>
  );
}