import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../reducers/attributesSlice';
import { Box, Button, Typography } from '@mui/material';
import { MAX_ATTRIBUTE_TOTAL } from '../consts';

const AttributeControl = ({ attribute }) => {
  const value = useSelector((state) => state.attributes[attribute]);
  const dispatch = useDispatch();

  const calculateModifier = (value) => {
    return Math.floor((value - 10) / 2);
  };

  const modifier = calculateModifier(value);

  return (
    <Box mb={2}>
      <Typography variant="h6">
        {attribute}: {value} (Modifier: {modifier >= 0 ? `+${modifier}` : modifier})
      </Typography>
      <Button variant="contained" color="secondary" onClick={() => dispatch(decrement({ attribute }))}>
        -
      </Button>
      <Button variant="contained" color="primary" onClick={() => dispatch(increment({ attribute }))}>
        +
      </Button>
    </Box>
  );
};

export default AttributeControl;
