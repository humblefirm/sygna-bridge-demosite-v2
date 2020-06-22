import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import QontoConnector from './QontoConnector';
import QontoStepIcon from './QontoStepIcon';

const useStyles = makeStyles((theme) => ({
  stepStyle: {
    width: '100%',
    maxWidth: '640px',
    margin: '0 auto',
    padding: '0',
    marginTop: '22px',
    backgroundColor: 'transparent',
  },
}));

const Steppers = (props) => {
  const classes = useStyles();
  return (
    <Stepper
      alternativeLabel
      activeStep={props.activeStep}
      connector={<QontoConnector />}
      className={classes.stepStyle}
    >
      {props.steps.map((label) => (
        <Step key={label}>
          <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

Steppers.propTypes = {
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};

export default Steppers;
