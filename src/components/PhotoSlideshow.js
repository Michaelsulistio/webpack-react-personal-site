import React, { useEffect, useState } from 'react';
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
    animation: 'fade 3s infinite'
  },
  photoContainer: {
    alignSelf: 'center'
  },
  photoHeader: {
    color: '#D3D8DB',
    fontSize: '18px',
    paddingTop: '12px'
  }
}));

const slideshowPhotos = [
  {
    imagePath: "static/images/normal_dev.jpg",
    prompt: "Original me!"
  },
  {
    imagePath: "static/images/futuristic_dev.png",
    prompt: "'Futuristic Full-Stack Mobile Developer'"
  },
  {
    imagePath: "static/images/neckbeard_dev.png",
    prompt: "'Web Developer'"
  },
  {
    imagePath: "static/images/epic_gamer.png",
    prompt: "'Epic Gamer'"
  },
  {
    imagePath: "static/images/gym_rat.png",
    prompt: "'Gym Rat'"
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

  useEffect(() => {
    // Move to the next image at a set interval
    let timer = setTimeout(() => {
      const nextIndex = (index + 1) % slideshowPhotos.length
      setIndex(nextIndex)
    }, 5000)
    
    return () => {
      clearTimeout(timer)
    }
  }, [index])

  return (<div className={classes.photoContainer}>
    <PhotoDisplay imagePath={slideshowPhotos[index].imagePath} alt={slideshowPhotos[index].prompt} />
    <div className={classes.photoHeader}>
      {slideshowPhotos[index].prompt}
    </div>
  </div>)
}