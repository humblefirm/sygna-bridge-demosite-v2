import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TransInfo from './OriVasp/TransferInfo';
import OriginInfo from './OriVasp/OriginInfo';

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
    },
    capitalize: {
      textTransform: 'capitalize',
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
}));

export default function Originator () {
    const classes = useStyles();
    return (
        <React.Fragment>
            <main className={classes.layout}>
                <TransInfo />
                <OriginInfo />
            </main>
        </React.Fragment>
    );
}
