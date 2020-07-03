import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "typeface-noto-sans";
import "typeface-open-sans";

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
}));

export default function OriginInfo(props) {
  const classes = useStyles();
  const { originInfo } = props;
  const {
    name,
    o_vasp,
    o_address,
    phy_address,
    birth,
    identity,
    identity_num,
  } = originInfo;
  return (
    <React.Fragment>
      <div className="border_form boder_form_done">
        <Typography variant="h6" gutterBottom className="title">
          originator info
        </Typography>
        <Grid container spacing={2} className={classes.my_1}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className="title label_title">
              name
            </Typography>
            <TextField
              required
              id="name"
              name="name"
              value={name}
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className="title label_title">
              originator VASP
            </Typography>
            <FormControl fullWidth>
              <Select
                id="o_vasp"
                name="o_vasp"
                value={o_vasp}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                classes={{ root: classes.root }}
                disabled
              >
                <MenuItem value={o_vasp} disabled>
                  {o_vasp}
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.my_1}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom className="title label_title">
              Originator Virtual Asset Address
            </Typography>
            <TextField
              required
              id="o_address"
              name="o_address"
              value={o_address}
              fullWidth
              defaultValue="0x0b696FEB926675a2f8B55644A1669b43b9924C03"
              disabled
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.my_1}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom className="title label_title">
              Physical Address
            </Typography>
            <TextField
              required
              id="phy_address"
              name="phy_address"
              value={phy_address}
              fullWidth
              defaultValue="Bahnhofstrasse 665, 8001 Zurich, Switzerland"
              disabled
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.my_1}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom className="title label_title">
              Date of birth
            </Typography>
            <TextField
              id="birth"
              name="birth"
              value={birth}
              fullWidth
              disabled
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.my_1}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom className="title label_title">
              Unique Identity
            </Typography>
            <TextField
              id="identity"
              name="identity"
              value={identity}
              fullWidth
              disabled
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.my_1}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom className="title label_title">
              National Identity Number
            </Typography>
            <TextField
              required
              id="identity_num"
              name="identity_num"
              value={identity_num}
              fullWidth
              disabled
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
