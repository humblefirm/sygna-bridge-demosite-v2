import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const payments = [
    { name: 'Name', detail: 'David Beckham' },
    { name: 'Date of birth', detail: '01975-05-02' },
    { name: 'Physical Address', detail: 'Bahnhofstrasse 665, 8001 Zuric...' },
    { name: 'Unique Identity', detail: '-' },
    { name: 'National Identity Number', detail: '-' },
];

const marginTop= {
    marginTop: '30px',
};

const divider= {
    display: 'block',
    borderBottom: '1px solid #C5CEE0',
    margin: '7px 0',
};

const deepBlue = {
    borderColor: '#006FB1',
    color: '#006FB1',
};

export default function PrivateInfo () {
    return (
        <React.Fragment>
            <div className="border_form" style={marginTop}>
                <Typography variant="h6" gutterBottom className="title title_blue" style={deepBlue}>
                    Private Info
                </Typography>
                <Typography gutterBottom variant="h6" gutterBottom className="title label_title">
                    Originator
                </Typography>
                <Grid container>
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
                        Beneficiary
                        </Typography>
                    </Grid>
                    <Grid item xs={8} md={9}>
                        <Typography gutterBottom style={deepBlue}>Antoine Griezmann</Typography>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}
