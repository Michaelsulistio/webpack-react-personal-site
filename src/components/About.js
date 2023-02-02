import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import PhotoSlideshow from './PhotoSlideshow';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    bodyContainer: {
      paddingTop: '100px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    logoHeader: {
      color: 'black',
      textAlign: 'left',
      fontSize: '48px',
      fontWeight: 'bold',
      margin: '4px',
      fontFamily: ['Inter', 'sans-serif'],
    },
    introText: {
      color: 'black',
      textAlign: 'left',
      fontSize: '18px',
      fontFamily: ['Inter', 'sans-serif'],
      overflowWrap: 'break-word',
      maxWidth: '500px'
    },
    slideshowContainer: {
     display: 'flex',
     flexDirection: 'column',
     textAlign: 'center'
    },
    slideshowHeader: {
      color: 'black',
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '8px',
      fontFamily: ['Inter', 'sans-serif'],
    },
    footer: {
      color: 'black',
      position: 'absolute',
      bottom: '40px',
      right: '50%',
      fontSize: '18px',
      textAlign: 'center'
    }
  }));

export default function About() {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction={'row'} className={classes.bodyContainer} columns={{xs: 1, sm: 1, md: 8}}>
                <Grid item xs={1} sm={4}>
                    <Box className={classes.headerContainer}>
                        <h1 className={classes.logoHeader}>Michael Sulist.io </h1>
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
                    </Grid>
                    <Grid item xs={1} sm={4}>
                    <Box className={classes.slideshowContainer}>
                        <h1 className={classes.slideshowHeader}> AI generated depictions of myself as... </h1>
                        <PhotoSlideshow />
                    </Box>
                    </Grid>  
            </Grid>
            <div className={classes.footer}>
                <Link color="inherit" href="https://www.linkedin.com/in/michael-sulistio-288b28132/">linkedin</Link> - <Link href="https://github.com/Michaelsulistio" color="inherit">github</Link>
            </div>
        </div>
    )
}