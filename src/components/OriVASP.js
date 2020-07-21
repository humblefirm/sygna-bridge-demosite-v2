import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TransInfo from './OriVasp/TransferInfo';
import OriginInfo from './OriVasp/OriginInfo';
import Button from '@material-ui/core/Button';
import BeneResult from './BeneInfo/BeneResult';
import Sanctions from './Sanction/Sanction'
import isIllegal from '../plugin';

const useStyles = makeStyles(() => ({
  layout: {
    width: 'auto',
  },
  buttons: {
    paddingTop: '30px',
    textAlign: 'center',
  },
}));

export default function Originator(props) {
  const classes = useStyles();
  const {
    activeStep,
    clickAccept,
    disable,
    transferInfo,
    onChange,
    onSend,
    inputErrors,
    setInputErrors,
    signedData,
  } = props;
  const [open, setOpen] = useState(false);

  //const [error, hasError] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const isValid = form.checkValidity(); // 目前的表單資料是不是有效的
    // const isValid = true;
    const formData = new FormData(form); //表單的資料拿出來
    const beneficiary_name = Array.from(formData)[2][1];
    const beneficiary_address = Array.from(formData)[4][1];

    const validationMessages = Array.from(formData.keys()).reduce(
      (acc, key) => {
        // console.log(`key = ${key}`);
        acc[key] = form.elements[key].validationMessage;
        return acc;
      },
      {},
    );
    if (!isValid) {
      setInputErrors(validationMessages);
      props.onError();
      return;
    }
    if (
      isIllegal("beneficiary_name", beneficiary_name) ||
      isIllegal("beneficiary_address", beneficiary_address)
      ) {
      setOpen(true);
      return;
    }
    onSend();
  };
  return (
    <React.Fragment>
      <main className={classes.layout}>
        {activeStep === 3 ? (
          <BeneResult
            activeStep={activeStep}
            clickAccept={clickAccept}
            signedData={signedData}
          />
        ) : null}
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <TransInfo
            disable={disable}
            transferInfo={transferInfo}
            onChange={onChange}
            inputErrors={inputErrors}
          />
          {activeStep === 3 ? null : <OriginInfo />}
          <div className={classes.buttons}>
            {activeStep === 3 ? null : (
              <Button
                variant="contained"
                type={'submit'}
                className="btn btn-primary"
              >
                Send
              </Button>
            )}
          </div>
          <Sanctions open={open} setOpen={setOpen} onSend={onSend}></Sanctions>
        </form>
      </main>
    </React.Fragment>
  );
}
