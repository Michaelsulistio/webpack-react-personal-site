import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';


const useStyles = makeStyles((theme) => ({
  profilePictureArtCard: {
    height: 400, 
    width: 400,
    boxShadow: "5px 5px 5px black",
    borderRadius: 15,
    objectFit: 'None',
  },
  photoContainer: {
    alignSelf: 'center'
  }
}));

const slideshowPhotos = [
  {
    imagePath: "static/images/normal_dev.jpg",
    prompt: "Me!"
  },
  {
    imagePath: "static/images/futuristic_dev.png",
    prompt: "Futuristic Full-Stack Mobile Developer"
  },
  {
    imagePath: "static/images/neckbeard_dev.png",
    prompt: "Futuristic Web Developer"
  }
]

function PhotoDisplay(props) {
    const classes = useStyles();
    return <Box
              sx={{
                width: 400,
                height: 400,
              }}>
              <img
                src={props.imagePath}
                alt={props.alt}
                className={classes.profilePictureArtCard}
              />
          </Box>;
}


export default function PhotoSlideshow(props) {
  const [index, setIndex]= useState(0)
  const classes = useStyles();

  return (<div className={classes.photoContainer}>
    <PhotoDisplay imagePath={slideshowPhotos[index].imagePath} alt={slideshowPhotos[index].prompt} />
  </div>)
}