import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Bridge from '../components/Info';
import Originator from '../components/OriVASP';
import BeneInfo from '../components/BeneInfo/BeneInfo';
import OriginInfo from '../components/OriVasp/OriginInfo'; //測試用
import StyledTabs from './StyledTabs';
import StyledTab from './StyledTab';
import Steppers from './Steppers';

import 'typeface-noto-sans';
import 'typeface-open-sans';

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    height: '100%',
    borderRadius: '0',
  },
  stepBlock: {
    padding: '22px 0 33px',
  },
  stepStyle: {
    width: '100%',
    maxWidth: '640px',
    margin: '0 auto',
    padding: '0',
    marginTop: '22px',
    backgroundColor: 'transparent',
  },
  leftPadding: {
    padding: '20px',
  },
  rightPadding: {
    padding: '20px 30px',
  },
  textCenter: {
    textAlign: 'center',
  },
}));

function Content() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const [originatorReadOnly, setOriginatorReadOnly] = React.useState(false);
  const [result, setResult] = React.useState('');

  const handleNext = () => {
    setValue(value + 1);
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSendClick = () => {
    setValue(value + 1);
    setActiveStep(activeStep + 1);
  };

  const handleAcceptClick = () => {
    setOriginatorReadOnly(true);
    setValue(0);
    setActiveStep(activeStep + 1);
    //
    setResult('Accept');
  };

  const handleRejectClick = () => {
    setOriginatorReadOnly(true);
    setValue(0);
    setActiveStep(activeStep + 1);
    setResult('Reject');
  };

  const handleDecryptClick = () => {
    setActiveStep(activeStep + 1);
  };

  function getStepContent(getSteps) {
    console.log(`getSteps = ${getSteps}`);
    switch (getSteps) {
      case 0:
        return (
          <Originator
            result={result}
            onSendClick={handleSendClick}
            readOnly={originatorReadOnly}
            activeStep={activeStep}
          />
        );
      case 1:
        return (
          <BeneInfo
            onAcceptClick={handleAcceptClick}
            onRejectClick={handleRejectClick}
            onDecryptClick={handleDecryptClick}
          />
        );
      default:
        throw new Error('Unknown step');
    }
  }

  const handleChange = (event, newValue) => {
    console.log(`newValue = ${newValue}`);
    setValue(newValue);
  };
  console.log(`value = ${value}`);
  return (
    <React.Fragment>
      <div className="container">
        <div className={classes.root}>
          <div className={classes.stepBlock}>
            <Typography variant="h5" className={classes.textCenter}>
              Description text
            </Typography>
            <Steppers steps={[1, 2, 3, 4]} activeStep={activeStep} />
          </div>
          <Grid container spacing={3}>
            {/* VASP & Info */}
            <Grid item xs={12} md={8}>
              <Paper
                elevation={0}
                className={(classes.root, classes.leftPadding)}
              >
                <div>
                  <StyledTabs value={value} onChange={handleChange}>
                    <StyledTab label="Originator VASP" disabled={value === 1} />
                    <StyledTab
                      label="Beneficiary Info"
                      disabled={value === 0}
                    />
                  </StyledTabs>
                  <Typography className={classes.padding} />
                </div>
                {getStepContent(value)}
              </Paper>
            </Grid>
            {/* Bridge Service */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.root}>
                <Bridge />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Content;
