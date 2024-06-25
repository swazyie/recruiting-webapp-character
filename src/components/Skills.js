import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementSkill, decrementSkill } from '../reducers/skillsSlice';
import { SKILL_LIST,SKILL_DESCRIPTION } from '../consts';
import { Box, Button, Typography, Tooltip} from '@mui/material';

const Skills = () => {
  const skills = useSelector((state) => state.skills);
  const attributes = useSelector((state) => state.attributes);
  const dispatch = useDispatch();

  const calculateModifier = (value) => {
    return Math.floor((value - 10) / 2);
  };

  const intelligenceModifier = calculateModifier(attributes.Intelligence);
  const totalPoints = 10 + (4 * intelligenceModifier);
  const pointsSpent = [...Object.values(skills)];
  const pointsRemaining = totalPoints - pointsSpent;

  return (
    <Box>
    <Tooltip title={SKILL_DESCRIPTION}>
      <Typography variant="h4">Skills</Typography>
    </Tooltip>
      <Typography variant="body1">Total Points: {totalPoints}</Typography>
      <Typography variant="body1">Points Remaining: {pointsRemaining}</Typography>
      <Box
        sx={{
          maxHeight: '400px',
          overflowY: 'auto',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      >
        {SKILL_LIST.map((skill) => {
          const attributeModifier = calculateModifier(attributes[skill.attributeModifier]);
          const totalSkillValue = skills[skill.name] + attributeModifier;

          return (
            <Box key={skill.name} mb={2}>
                <Typography variant="h6" sx={{ cursor: 'pointer' }}>
                  {skill.name}: {skills[skill.name]} (Modifier: {attributeModifier >= 0 ? `+${attributeModifier}` : attributeModifier}) Total: {totalSkillValue}
                </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(decrementSkill({ skill: skill.name }))}
                disabled={skills[skill.name] <= 0}
              >
                -
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(incrementSkill({ skill: skill.name }))}
                disabled={pointsRemaining <= 0}
              >
                +
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Skills;
