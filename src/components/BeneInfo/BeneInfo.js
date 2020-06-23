import React from 'react';
//import { Icon } from '@material-ui/core'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PrivateInfo from './Private';
import ActionButton from '../../partials/ActionButton';

const transcations = [
  { name: 'Beneficiary Vasp Code', detail: 'VASPUSNY' },
  {
    name: 'Originator Address',
    detail: '0x05ECAf39376088D7C8bF1aCc06018D7C8bF1aCc0601',
  },
  { name: 'Originator VASP Code', detail: 'VASPJPJT' },
  {
    name: 'Beneficiary Address',
    detail: '0x0b696FEB926675a2f8B55644A1668D7C8bF1aCc060',
  },
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
    marginBottom: '0',
    padding: '8px 15px',
    lineHeight: 1.5,
    fontSize: '14px',
    '&:hover': {
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
    },
  },
})(Button);

const TestIcon = {
  marginRight: '5px',
  fontSize: '32px',
};

const TestBlu = withStyles({
  root: {
    borderColor: '#006FB1',
    color: '#006FB1',
    wordWrap: 'break-word',
  },
})(Typography);

const divider = {
  display: 'block',
  borderBottom: '1px solid #C5CEE0',
  margin: '7px 0',
};

const deepBlue = {
  borderColor: '#006FB1',
  color: '#006FB1',
};

const wordBreak = {
  wordWrap: 'break-word',
};

export default function BeneInfo(props) {
  const classes = useStyles();
  const [verifyClicked, setVerifyClicked] = React.useState(false);
  const [decryptClicked, setDecryptClicked] = React.useState(false);

  const { onAcceptClick, onRejectClick, onDecryptClick } = props;

  const renderActionButton = () => {
    if (decryptClicked) {
      return <Typography />;
    }
    if (verifyClicked) {
      return (
        <Typography>
          <TestBtn
            onClick={() => {
              setDecryptClicked(true);
              onDecryptClick();
            }}
            variant="contained"
            className="btn btn-primary"
          >
            Decrypt
          </TestBtn>
        </Typography>
      );
    }

    return (
      <Typography>
        <TestBtn
          onClick={() => setVerifyClicked(true)}
          variant="contained"
          className="btn btn-primary"
        >
          Verify
        </TestBtn>
      </Typography>
    );
  };
  return (
    <React.Fragment>
      <ListItem disableGutters="true">
        <ListItem
          style={{ padding: 0, color: '#34C174' }}
          disableGutters="true"
        >
          {!verifyClicked ? (
            ''
          ) : (
            <ListItem disableGutters="true">
              <CheckCircleRoundedIcon style={TestIcon} />
              <ListItem style={{ fontFamily: 'Open Sans', paddingLeft: '0' }}>
                Verify Success!
              </ListItem>
            </ListItem>
          )}
        </ListItem>
        {renderActionButton()}
      </ListItem>
      <div className="border_form">
        <Typography variant="h6" gutterBottom className="title">
          transfer info
        </Typography>
        <Grid container>
          <Grid item xs={4} md={3}>
            <Typography variant="h6" className="title label_title">
              Private Info
            </Typography>
          </Grid>
          <Grid item xs={8} md={9}>
            <TestBlu style={deepBlue} className={classes.root}>
              04bb2aae0e33fbe50ffb6121375a4e04bb2aae0e33fbe50ffb6121375a4e04bb2aae0e33fbe50ffb6121375a4e04bb2aae0e33fbe50ffb6121375a4e04bb2aae0e33fbe50ffb6121375a4e
            </TestBlu>
          </Grid>
        </Grid>
        <div style={divider}></div>
        <Typography gutterBottom variant="h6" className="title label_title">
          Transaction
        </Typography>
        <Grid container spacing={1} className={classes.padding}>
          {transcations.map((transcation) => (
            <React.Fragment key={transcation.name}>
              <Grid item xs={4} md={3}>
                <Typography gutterBottom>{transcation.name}</Typography>
              </Grid>
              <Grid item xs={8} md={9}>
                <TestBlu gutterBottom style={(deepBlue, wordBreak)}>
                  {transcation.detail}
                </TestBlu>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
        <div style={divider}></div>
        <Grid container>
          <Grid item xs={4} md={3}>
            <Typography variant="h6" className="title label_title">
              Date
            </Typography>
          </Grid>
          <Grid item xs={8} md={9}>
            <Typography style={(deepBlue, wordBreak)}>
              2019-08-15T10:28:10.364Z
            </Typography>
          </Grid>
        </Grid>
        <div style={divider}></div>
        <Grid container>
          <Grid item xs={4} md={3}>
            <Typography variant="h6" className="title label_title">
              Signature
            </Typography>
          </Grid>
          <Grid item xs={8} md={9}>
            <Typography style={(deepBlue, wordBreak)}>
              9eee630c20a2aa894373216b32343c9eee630c20a2aa
            </Typography>
          </Grid>
        </Grid>
        <div style={divider}></div>
        <Grid container>
          <Grid item xs={4} md={3}>
            <Typography variant="h6" className="title label_title">
              transfer ID
            </Typography>
          </Grid>
          <Grid item xs={8} md={9}>
            <Typography style={(deepBlue, wordBreak)}>
              01ca7589-f697-4637-931e-aa8922-931e-aa8922
            </Typography>
          </Grid>
        </Grid>
      </div>
      {decryptClicked ? (
        <PrivateInfo
          onAcceptClick={onAcceptClick}
          onRejectClick={onRejectClick}
        />
      ) : null}
    </React.Fragment>
  );
}
