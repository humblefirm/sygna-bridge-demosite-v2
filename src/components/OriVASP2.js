import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BeneResult from './BeneInfo/BeneResult';
import TransInfo2 from './OriVasp/TransferInfo2';
import OriginInfo from './OriVasp/OriginInfo';

const useStyles = makeStyles((theme) => ({
    layout: {
      width: 'auto',
    },
}));

export default function Originator2 () {
    const classes = useStyles();
    return (
        <React.Fragment>
            <main className={classes.layout}>
                <BeneResult />
                <TransInfo2 />
                <OriginInfo />
            </main>
        </React.Fragment>
    );
}
