import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
      fontSize: '14px',
      color: '#222b45',
      boxSizing: 'border-box',
    },
    my_1: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(4),
    },
    capitalize: {
      textTransform: 'capitalize',
      letterSpacing: '0.05rem',
      color: '#42826B',
      fontWeight: '600',
      fontFamily: 'Open Sans',
    },
}));

export default function TransInfo2 () {
    const classes = useStyles();
    const margin = {
        margin: '30px 0'
    }
    const marginTop = {
        marginTop: '30px'
    }
    const [CountryCode, setCountryCode] = React.useState('');
    const handleChange = (event) => {
      setCountryCode(event.target.value);
    };
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
                    <FormControl variant="" fullWidth>
                        <Select id="currency" 
                        defaultValue={2} onChange={handleChange} displayEmpty 
                        inputProps={{ 'aria-label': 'Without label' }} 
                        classes={{ root: classes.root, }} disabled>
                            <MenuItem value="" disabled>Select</MenuItem>
                            <MenuItem value={1}>BTC</MenuItem>
                            <MenuItem value={2}>ETH</MenuItem>
                        </Select>
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
                        id="amount_tran"
                        name="amount_tran"
                        fullWidth
                        value="0.347895"
                        readOnly
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
                        Amount
                    </Typography>
                    <TextField
                        required
                        id="amount_bene"
                        name="amount_bene"
                        fullWidth
                        value="0.0047"
                        disabled
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.my_1}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className="title label_title">
                        beneficiary VASP
                    </Typography>
                    <FormControl variant="" fullWidth>
                        <Select id="bene-vasp" 
                        defaultValue={2} onChange={handleChange} displayEmpty 
                        inputProps={{ 'aria-label': 'Without label' }} 
                        classes={{ root: classes.root, }} disabled>
                            <MenuItem value="" disabled>Select</MenuItem>
                            <MenuItem value={1}>VASP in USA</MenuItem>
                            <MenuItem value={2}>VASP in JP</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom className="title label_title">
                        beneficiary virtual asset address
                    </Typography>
                    <TextField
                        required
                        id="bene_address"
                        name="bene_address"
                        fullWidth
                        value="0x0b696FEB926675a2f8B55644A1669b43b9924C03"
                        disabled
                    />
                </Grid>
            </Grid>
            </div>
        </React.Fragment>
    );
}
