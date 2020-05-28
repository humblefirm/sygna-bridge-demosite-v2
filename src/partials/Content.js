import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import StepConnector from '@material-ui/core/StepConnector';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Bridge from '../components/Info';
import Originator from '../components/OriVASP';
import BeneInfo from '../components/BeneInfo/BeneInfo';
import OriginInfo from '../components/OriVasp/OriginInfo'; //測試用
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

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 12,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#42826B',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#42826B',
    },
  },
  line: {
    borderColor: '#9FB6AE',
    borderTopWidth: 5,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#9FB6AE',
    display: 'flex',
    height: 30,
    alignItems: 'center',
  },
  active: {
    color: '#42826B',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#104935',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

function getSteps() {
  return ['', '', '', ''];
}

function getStepContent(getSteps) {
  switch (getSteps) {
    case 0:
      return <Originator />;
    case 1:
      return <BeneInfo />;
    case 2:
      return <Originator />;
    case 3:
      return <Originator />;
    default:
      throw new Error('Unknown step');
  }
}

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(16, 73, 53, 0.32);',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#104935',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#222B45',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    margin: '0 auto',
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

function Content() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className={classes.root}>
          <div className={classes.stepBlock}>
            <Typography variant="h5" className={classes.textCenter}>
              Description text
            </Typography>
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />} className={classes.stepStyle}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <Grid container spacing={3}>
            {/* VASP & Info */}
            <Grid item xs={12} md={8}>
              <Paper elevation={0} className={classes.root, classes.leftPadding}>
                <div>
                  <StyledTabs value={value} onChange={handleChange}>
                    <StyledTab label="Originator VASP" />
                    <StyledTab label="Beneficiary Info" />
                  </StyledTabs>
                  <Typography className={classes.padding} />
                </div>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {/* {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )} */}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === 0 ? 'Send' : 'Accept'}
                    {/* {activeStep === 2 ? 'test' :'Accept'} */}
                  </Button>
                  {activeStep === 2 && (
                      <Button onClick={handleNext} className={classes.button}>
                        Reject
                      </Button>
                  )} 
                </div>
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
