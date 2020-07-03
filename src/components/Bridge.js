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
  accept: {
    color: "#049956",
  },
  reject: {
    color: "#CC2A32",
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
  const classes = useStyles();
  const { activeStep, clickAccept, transferInfo, bo_vasp } = props;
  const { vasp } = transferInfo;
  function OriVASP(props) {
    const classes = inputStyles();
    return (
      <div className={classes.marginBottom}>
        <Typography variant="h6" gutterBottom className="title label_title">
          Originator VASP code
        </Typography>
        <TextField
          id="origin_vasp_code"
          name="origin_vasp_code"
          value={bo_vasp}
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
          defaultValue="-"
          value={activeStep > 0 ? vasp : "-"}
          fullWidth
          InputProps={{ readOnly: true }}
        />
      </div>
    );
  }
  function Result(props) {
    const classes = inputStyles();
    const value = () => {
      if (activeStep === 3 && clickAccept === true) {
        //return {a:"ACCEPT",c:'a'};
        return "ACCEPT";
      } else if (activeStep === 3 && clickAccept !== true) {
        return "REJECT";
      } else if (activeStep > 0 && activeStep < 3) {
        return "WAITING";
      } else {
        return "-";
      }
    };
    const color = () => {
      if (activeStep === 3 && clickAccept === true) {
        return "accept";
      } else if (activeStep === 3 && clickAccept !== true) {
        return "reject";
      }
    };
    return (
      <div className={classes.marginBottom}>
        <Typography variant="h6" gutterBottom className="title label_title">
          Result
        </Typography>
        {console.log(`color = ${color()}`)}
        <TextField
          id="result"
          name="result"
          fullWidth
          inputProps={{ readOnly: true, className: color() }}
          value={value()}
        />
        {console.log(`clickAccept = ${clickAccept}`)}
      </div>
    );
  }

  return (
    <React.Fragment>
      <Typography variant="h5" className={classes.capitalize}>
        Bridge Service
      </Typography>
      <Paper elevation={0} className={classes.root}>
        <form action="">
          {/* {console.log(`o_vasp = ${o_vasp}`)} */}
          <OriVASP />
          <BeneVASP />
          <Result />
          {activeStep > 0 ? <Code /> : null}
        </form>
      </Paper>
    </React.Fragment>
  );
}

export default Bridge;
