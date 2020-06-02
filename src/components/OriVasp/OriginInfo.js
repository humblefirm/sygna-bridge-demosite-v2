import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'typeface-noto-sans';
import 'typeface-open-sans';

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
}));

const disableColor = {
    color: '#222b45',
}

export default function OriginInfo () {
    const classes = useStyles();
    const margin = {
        margin: '30px 0 0'
    }
    const [CountryCode, setCountryCode] = React.useState('');
    const handleChange = (event) => {
      setCountryCode(event.target.value);
    };
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
                        <TextField style={disableColor }
                            required
                            id="name"
                            name="name"
                            fullWidth
                            defaultValue="David Beckham"
                            disabled
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom className="title label_title">
                            originator VASP
                        </Typography>
                        <FormControl fullWidth>
                            <Select id="origin-vasp" 
                                value={CountryCode} onChange={handleChange} displayEmpty 
                                inputProps={{ 'aria-label': 'Without label' }}
                                classes={{ root: classes.root, }} disabled value={1}>
                                <MenuItem value="" disabled>Select</MenuItem>
                                <MenuItem value={1} selected>VASP in USA</MenuItem>
                                <MenuItem value={2}>VASP in JP</MenuItem>
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
                            id="origin_address"
                            name="origin_address"
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
                            defaultValue="1975-05-02"
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
                        defaultValue="-"
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
                        defaultValue="-"
                        fullWidth
                        disabled
                        />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}
