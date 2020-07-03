import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "14px",
    color: "#222b45",
    boxSizing: "border-box",
  },
  my_1: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(4),
  },
  capitalize: {
    textTransform: "capitalize",
    letterSpacing: "0.05rem",
    color: "#42826B",
    fontWeight: "600",
    fontFamily: "Open Sans",
  },
}));

export default function TransInfo(props) {
  const classes = useStyles();
  const margin = {
    margin: "30px 0",
  };
  const marginTop = {
    marginTop: "30px",
  };
  const { disable, transferInfo, handleChange, getError } = props;
  const { currency, amount, b_name, vasp, address } = transferInfo;

  return (
    <React.Fragment>
      <div style={margin}>
        <Typography variant="h6" className="title">
          transfer info
        </Typography>
        <Grid container spacing={2} className={classes.my_1}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className="title label_title">
              currency
            </Typography>
            <FormControl fullWidth required error={!!getError("currency")}>
              <Select
                id="currency"
                name="currency"
                value={currency}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                classes={{ root: classes.root }}
                disabled={disable}
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                <MenuItem value={"BTC"}>BTC</MenuItem>
                <MenuItem value={"ETH"}>ETH</MenuItem>
              </Select>
              {getError === true ? (
                <FormHelperText>Here's my helper text</FormHelperText>
              ) : null}
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className="title label_title">
              Amount
            </Typography>
            <TextField
              required
              id="amount"
              name="amount"
              type="number"
              placeholder="Ex: 0.0047"
              fullWidth
              value={amount}
              disabled={disable}
              onChange={handleChange}
              inputProps={{ min: "0" }}
              helperText={getError("amount")}
              error={!!getError("amount")}
            />
          </Grid>
        </Grid>
        <div style={marginTop}>
          <Typography variant="h6" gutterBottom className="title">
            beneficiary info
          </Typography>
        </div>
        <Grid container spacing={2} className={classes.my_1}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className="title label_title">
              Name
            </Typography>
            <TextField
              required
              id="b_name"
              name="b_name"
              type="text"
              fullWidth
              value={b_name}
              disabled={disable}
              onChange={handleChange}
              helperText={getError("b_name")}
              error={!!getError("b_name")}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.my_1}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className="title label_title">
              beneficiary VASP Code
            </Typography>
            <FormControl fullWidth required error={!!getError("vasp")}>
              <Select
                id="vasp"
                name="vasp"
                value={vasp}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                classes={{ root: classes.root }}
                disabled={disable}
                helperText={getError("vasp")}
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                <MenuItem value={"VASP in USA"}>VASP in USA</MenuItem>
                <MenuItem value={"VASP in JP"}>VASP in JP</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom className="title label_title">
              beneficiary virtual asset address
            </Typography>
            <TextField
              required
              id="address"
              name="address"
              placeholder="0x0b696FEB926675a2f8B55644A1669b43b9924C03"
              fullWidth
              value={address}
              disabled={disable}
              onChange={handleChange}
              helperText={getError("address")}
              error={!!getError("address")}
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
