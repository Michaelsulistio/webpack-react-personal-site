import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import PhotoSlideshow from './PhotoSlideshow';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoHeader: {
    color: 'black',
    textAlign: 'center',
    fontSize: '72px',
    fontWeight: 'bold',
    fontFamily: ['Inter', 'sans-serif'],
  },
  introText: {
    color: 'black',
    textAlign: 'left',
    fontSize: '18px',
    fontFamily: ['Inter', 'sans-serif'],
    inlineSize: '500px',
    overflowWrap: 'break-word'
  },
  slideshowContainer: {
    width: '400px',
    height: '400px'
  },
  footer: {
    fontSize: '18px',
    textAlign: 'center'
  }
}));


const App = () => {
  const classes = useStyles();
  return (
    <Box className={classes.headerContainer} column={1}>
        <Box item xs={4}>
          <Box>
            <p className={classes.logoHeader}>Michael Sulist.io </p>
            <p className={classes.introText}>
              Hi! I'm a fullstack Software Engineer based in San Francisco.
              I attended the Unviersity of Washington for Computer Science and graduated in 2020. Since then, 
              I've worked at Meta as a fullstack Mobile developer, until I was laid off. 
              <br /> <br />
              I worked on the Messenger App and Facebook App with extensive experience in
              <span style={{color: '#007AFF'}}> iOS (Objective-C/Swift)</span>,   
              <span style={{color: '#a4c639'}}> Android(Java/Kotlin)</span>, and   
              <span style={{color: '#61dafb'}}> React Native</span> development.
            </p>
          </Box>
        </Box>
        <Box className={classes.slideshowContainer} item xs={4}>
          <PhotoSlideshow />
        </Box>
      {/* <Box className={classes.headerContainer}>
        <Box>
          <p className={classes.logoHeader}>Michael sulist.io </p>
          <p className={classes.introText}>text</p>
        </Box>
        <PhotoSlideshow />
      </Box>

      <Box className={classes.footer}> more to come!</Box> */}
    </Box>
  );
};

export default App;
