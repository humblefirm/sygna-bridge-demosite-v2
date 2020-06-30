import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Code from "./CodeData/Code";

const inputStyles = makeStyles({
  root: {
    width: "100%",
  },
  marginBottom: {
    marginBottom: "18px",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px 20px",
    borderRadius: "0",
    backgroundColor: "#fff",
  },
  capitalize: {
    textTransform: "capitalize",
    padding: "17px 15px",
    backgroundColor: "#104935",
    color: "#fff",
    fontFamily: "Open Sans",
  },
}));

function Bridge(props) {
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
          InputProps={{ readOnly: true }}
        />
      </div>
    );
  }
  function BeneVASP(props) {
    const classes = inputStyles();
    return (
      <div className={classes.marginBottom}>
        <Typography variant="h6" gutterBottom className="title label_title">
          Beneficiary VASP code
        </Typography>
        <TextField
          id="bene_vasp_code"
          name="bene_vasp_code"
          value={activeStep > 0 ? props.vasp : "-"}
          fullWidth
          InputProps={{ readOnly: true }}
        />
      </div>
    );
  }
  function Result(props) {
    const classes = inputStyles();
    function value() {
      if (activeStep === 3 && clickAccept === true) {
        return "ACCEPT";
      } else if (activeStep === 3 && clickAccept !== true) {
        return "REJECT";
      } else if (activeStep > 0 && activeStep < 3) {
        return "WAITING";
      } else {
        return "-";
      }
    }
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
          InputProps={{ readOnly: true }}
          value={value()}
        />
        {console.log(`clickAccept = ${clickAccept}`)}
        {console.log(`activeStep = ${activeStep}`)}
      </div>
    );
  }
  const classes = useStyles();
  const { activeStep, clickAccept, vasp } = props;
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
          {activeStep > 0 ? <Code /> : null}
          {console.log(`activeStep = ${activeStep}`)}
        </form>
      </Paper>
    </React.Fragment>
  );
}

export default Bridge;
