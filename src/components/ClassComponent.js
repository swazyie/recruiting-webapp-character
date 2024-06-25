import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CLASS_LIST } from '../consts';
import { Box, Typography, Paper, Button } from '@mui/material';

const ClassComponent = () => {
  const attributes = useSelector((state) => state.attributes);
  const [selectedClass, setSelectedClass] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);

  const checkClassRequirements = (className) => {
    const requirements = CLASS_LIST[className];
    return Object.keys(requirements).every((attr) => attributes[attr] >= requirements[attr]);
  };

  const handleClassClick = (className) => {
    if (selectedClass === className) {
      setDetailsVisible(!detailsVisible);
    } else {
      setSelectedClass(className);
      setDetailsVisible(true);
    }
  };

  return (
    <Box>
      <Typography variant="h4">Classes</Typography>
      {Object.keys(CLASS_LIST).map((className) => (
        <Paper
          key={className}
          style={{
            padding: '16px',
            margin: '8px 0',
            backgroundColor: checkClassRequirements(className) ? '#e8f5e9' : '#ffebee',
            cursor: 'pointer',
          }}
          onClick={() => handleClassClick(className)}
        >
          <Typography variant="h6">{className}</Typography>
          {selectedClass === className && detailsVisible && (
            <Box>
              {Object.entries(CLASS_LIST[className]).map(([attr, minValue]) => (
                <Typography key={attr}>{attr}: {minValue}</Typography>
              ))}
            </Box>
          )}
          {checkClassRequirements(className) ? (
            <Typography color="primary">Meets Requirements</Typography>
          ) : (
            <Typography color="error">Does not meet requirements</Typography>
          )}
        </Paper>
      ))}
      {selectedClass && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setDetailsVisible(!detailsVisible)}
        >
          {detailsVisible ? 'Collapse' : 'Expand'} Details
        </Button>
      )}
    </Box>
  );
};

export default ClassComponent;
