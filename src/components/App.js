import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { shadows } from '@mui/system';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  profilePictureArtCard: {
    height: 400, 
    width: 400,
    maxHeight: 400, 
    maxWidth: 400,
    boxShadow: "10px 10px 5px grey",
    borderRadius: 15,
    objectFit: 'None',
  },
 // other classes here
}));

function genAIArtCard(classes, image_path, alt) {
  return <Box
            sx={{
              width: 400,
              height: 400,
            }}>
            <img
              src={image_path}
              alt={alt}
              className={classes.profilePictureArtCard}
            />
        </Box>;
}


const App = () => {
  const classes = useStyles();
  return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs>
            {genAIArtCard(classes, "/static/images/futuristic_dev.png","Prompt: Futuristic Full-Stack Mobile Developer")}
          </Grid>
          <Grid item xs>
            {genAIArtCard(classes, "/static/images/neckbeard_dev.png","Prompt: Futuristic Full-Stack Mobile Developer")}
          </Grid>
          <Grid item xs>
            {genAIArtCard(classes, "/static/images/normal_dev.jpg","Prompt: Futuristic Full-Stack Mobile Developer")}
          </Grid>
      </Grid>
  );
};

export default App;
