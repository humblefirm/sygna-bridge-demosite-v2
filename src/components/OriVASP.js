import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TransInfo from './OriVasp/TransferInfo';
import OriginInfo from './OriVasp/OriginInfo';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
  },
}));

export default function Originator(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <main className={classes.layout}>
        <TransInfo readOnly={props.readOnly} />
        <OriginInfo onSendClick={props.onSendClick} readOnly={props.readOnly} />
      </main>
    </React.Fragment>
  );
}
