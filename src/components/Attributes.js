import React from 'react';
import { ATTRIBUTE_LIST } from '../consts';
import AttributeControl from './AttributeControl';
import { Box, Typography } from '@mui/material';

const Attributes = () => {
  return (
    <Box>
      <Typography variant="h4">Character Attributes</Typography>
      {ATTRIBUTE_LIST.map((attribute) => (
        <AttributeControl key={attribute} attribute={attribute} />
      ))}
    </Box>
  );
};

export default Attributes;

