import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

// import Item from '@mui/material/Item';


const App = () => {
  return (
      <Grid container spacing={4}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                height="400"
                image="/static/images/neckbeard_dev.png"
                alt="Prompt: Futuristic Full-Stack Developer"
              />
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                height="400"
                image="/static/images/normal_dev.jpg"
                alt="Prompt: Futuristic Full-Stack Developer"
              />
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                height="400"
                image="/static/images/futuristic_dev.png"
                alt="Prompt: Futuristic Full-Stack Developer"
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default App;
