import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import PhotoSlideshow from './PhotoSlideshow';

const useStyles = makeStyles((theme) => ({
  appContainer: {
    backgroundColor: 'grey',
    minHeight: '100vh',
    minWidth: '100vh'
  },
  logoHeader: {
    textAlign: 'center'
  },
}));


const App = () => {
  const classes = useStyles();
  return (
    <Container fixed className={classes.appContainer}>
      <div className={classes.logoHeader}>
        michael sulist.io
      </div>

      <PhotoSlideshow />
    </Container>
  );
};

export default App;
