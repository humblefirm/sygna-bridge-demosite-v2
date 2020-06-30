import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TransInfo from "./OriVasp/TransferInfo";
import OriginInfo from "./OriVasp/OriginInfo";
import Button from "@material-ui/core/Button";
import BeneResult from "./BeneInfo/BeneResult";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
  },
  buttons: {
    paddingTop: "30px",
    textAlign: "center",
  },
}));

export default function Originator(props) {
  const classes = useStyles();
  const { activeStep, clickAccept, save, disable } = props;
  console.log(`save1 = ${save}`);
  return (
    <React.Fragment>
      <main className={classes.layout}>
        {activeStep === 3 ? (
          <BeneResult activeStep={activeStep} clickAccept={clickAccept} />
        ) : null}
        <TransInfo disable={disable} save={save} />
        <OriginInfo />
        {/* {console.log(`activeStep = ${activeStep}`)} */}
        <div className={classes.buttons}>
          {activeStep === 3 ? null : (
            <Button
              variant="contained"
              onClick={() => {
                props.onSend();
              }}
              //   只做一件事
              className="btn btn-primary"
            >
              Send
            </Button>
          )}
        </div>
      </main>
    </React.Fragment>
  );
}
