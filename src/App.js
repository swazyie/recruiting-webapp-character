import { useState, useEffect } from 'react';
// import './App.css'; // lint and remove unused files
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST,SKILL_DESCRIPTION } from './consts.js';
import { Provider, useDispatch, useSelector  } from 'react-redux';
import { store } from './store';
import Attributes from './components/Attributes';
import ClassComponent from './components/ClassComponent';
import Skills from './components/Skills';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { saveCharacterData, loadCharacterData } from './reducers/thunks'; // should be redux/thunks and redux/reducers

const AppContent = () => {
  const dispatch = useDispatch();
  const attributes = useSelector((state) => state.attributes);
  const skills = useSelector((state) => state.skills);
  const characterData = useSelector((state) => state.characters?.data);

  useEffect(() => {
    dispatch(loadCharacterData());
  }, [dispatch]);

  const handleSave = () => {
    const character = {
      attributes,
      skills,
    };
    dispatch(saveCharacterData(character));
  };

  return (
    <Container>
      <Typography align="center" variant="h5" >React Coding Exercise - Sameer Grewal</Typography>
      <Typography align="center" variant="h2" >Character Sheet</Typography>
      {/* <CharacterEditor /> */}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Attributes />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ClassComponent />
        </Grid>
        <Grid item xs={12} sm={4}>

          <Skills />
        </Grid>
      </Grid>
      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Character
        </Button>
      </Box>
    </Container>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;