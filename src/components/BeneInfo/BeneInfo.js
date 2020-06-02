import React from 'react';
import { Icon } from '@material-ui/core'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PrivateInfo from './Private';

const payments = [
    { name: 'Beneficiary Vasp Code', detail: 'VASPUSNY' },
    { name: 'Originator Address', detail: '0x05ECAf39376088D7C8bF1aCc0601...' },
    { name: 'Originator VASP Code', detail: 'VASPJPJT' },
    { name: 'Beneficiary Address', detail: '0x0b696FEB926675a2f8B55644A166...' },
    { name: 'Transaction Currency', detail: '0x8000003c' },
    { name: 'Amount', detail: '0.347895' },
];

const useStyles = makeStyles((theme) => ({
    padding: {
        padding: '0 10px',
    },
}));

const TestBtn = withStyles({
    root: {
        marginBottom: '15px',
        padding: '8px 15px',
        lineHeight: 1.5,
        '&:hover': {
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
        },
    }
})(Button);

const divider= {
    display: 'block',
    borderBottom: '1px solid #C5CEE0',
    margin: '7px 0',
};

const deepBlue = {
    borderColor: '#006FB1',
    color: '#006FB1',
};

export default function BeneInfo () {
    const classes = useStyles();
    const [verify, setVerify] = React.useState(true);
    return (
        <React.Fragment>
            <ListItem>
                <ListItemText style={deepBlue}>
                <CheckCircleRoundedIcon />{verify ? '' : 'Verify Sucecss!'}
                </ListItemText>
                <Typography>
                {verify ? (
                    <TestBtn onClick={() => setVerify(false)} variant="contained" className="btn btn-primary">
                        Verify
                    </TestBtn>
                    ) : (
                    <TestBtn onClick={() => setVerify(true)} variant="contained" className="btn">
                        Decrypt
                    </TestBtn>
                )}
                </Typography>
            </ListItem>
            <div className="border_form">
                <Typography variant="h6" gutterBottom className="title">
                    transfer info
                </Typography>
                <Grid container>
                    <Grid item xs={4} md={3}>
                        <Typography gutterBottom variant="h6" gutterBottom className="title label_title">
                            Private Info
                        </Typography>
                    </Grid>
                    <Grid item xs={8} md={9}>
                        <Typography gutterBottom style={deepBlue}>04bb2aae0e33fbe50ffb6121375a4e...</Typography>
                    </Grid>
                </Grid>
                <div style={divider}></div>
                <Typography gutterBottom variant="h6" gutterBottom className="title label_title">
                    Transaction
                </Typography>
                <Grid container spacing={1} className={classes.padding}>
                    {payments.map((payment) => (
                        <React.Fragment key={payment.name}>
                            <Grid item xs={4} md={3}>
                                <Typography gutterBottom>{payment.name}</Typography>
                            </Grid>
                            <Grid item xs={8} md={9}>
                                <Typography gutterBottom style={deepBlue}>{payment.detail}</Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
                <div style={divider}></div>
                <Grid container>
                    <Grid item xs={4} md={3}>
                        <Typography gutterBottom variant="h6" gutterBottom className="title label_title">
                        Date
                        </Typography>
                    </Grid>
                    <Grid item xs={8} md={9}>
                        <Typography gutterBottom style={deepBlue}>2019-08-15T10:28:10.364Z</Typography>
                    </Grid>
                </Grid>
                <div style={divider}></div>
                <Grid container>
                    <Grid item xs={4} md={3}>
                        <Typography gutterBottom variant="h6" gutterBottom className="title label_title">
                        Signature
                        </Typography>
                    </Grid>
                    <Grid item xs={8} md={9}>
                        <Typography gutterBottom style={deepBlue}>9eee630c20a2aa894373216b32343c...</Typography>
                    </Grid>
                </Grid>
                <div style={divider}></div>
                <Grid container>
                    <Grid item xs={4} md={3}>
                        <Typography gutterBottom variant="h6" gutterBottom className="title label_title">
                        transfer ID
                        </Typography>
                    </Grid>
                    <Grid item xs={8} md={9}>
                        <Typography gutterBottom style={deepBlue}>01ca7589-f697-4637-931e-aa8922...</Typography>
                    </Grid>
                </Grid>
            </div>
            <PrivateInfo />
        </React.Fragment>
    );
}
