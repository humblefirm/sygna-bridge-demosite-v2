import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const inputStyles = makeStyles({
    root: {
      width: '100%',
    },
    marginBottom: {
      marginBottom: '18px',
    }
});

function OriVASP() {
    const classes = inputStyles();
    return (
      <div className={classes.marginBottom}>
        <Typography variant="h6" gutterBottom className="title label_title">
          Originator VASP code
        </Typography>
        <TextField
          id="origin_vasp_code"
          name="origin_vasp_code"
          defaultValue="-"
          fullWidth
          InputProps={{ readOnly: true, }}
        />
      </div>
    );
}

function BeneVASP() {
    const classes = inputStyles();
    return (
      <div className={classes.marginBottom}>
        <Typography variant="h6" gutterBottom className="title label_title">
          Beneficiary VASP code
        </Typography>
        <TextField
          id="bene_vasp_code"
          name="bene_vasp_code"
          defaultValue="-"
          fullWidth
          InputProps={{ readOnly: true, }}
        />
      </div>
    );
}

function Result() {
    const classes = inputStyles();
    return (
      <div className={classes.marginBottom}>
        <Typography variant="h6" gutterBottom className="title label_title">
          Result
        </Typography>
        <TextField
          id="result"
          name="result"
          defaultValue="-"
          fullWidth
          InputProps={{ readOnly: true, }}
        />
      </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '30px 20px',
      borderRadius: '0',
      backgroundColor: '#fff',
    },
    capitalize: {
      textTransform: 'capitalize',
      padding: '17px 15px',
      backgroundColor: '#104935',
      color: '#fff',
      fontFamily: 'Open Sans',
    },
}));

function Bridge() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Typography variant="h5" className={classes.capitalize}>
        Bridge Service
        </Typography>
        <Paper elevation={0} className={classes.root}>
            <form action="">
                <OriVASP />
                <BeneVASP />
                <Result />
                <div>
                  <Typography variant="h6" gutterBottom className="title label_title">
                    Code
                  </Typography>
                  <div></div>
                </div>
            </form>
        </Paper>
      </React.Fragment>
    );
}

export default Bridge;  