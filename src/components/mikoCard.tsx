import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MikoCard() {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/Ollie.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Miko
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hi! I'm Miko.
          <br />
          I met Lucy at a mutual friend's and immediately thought she didn't like me as she had zero reaction to all of my jokes.
          Turns out she was just cold as it was winter in Wisconsin and she hates the cold!
        </Typography>
      </CardContent>
    </Card>
  );
}