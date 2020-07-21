import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";

class Sanctions extends Component {
  constructor(props) {
    super(props);
  }
  KeepGoing = () => {
    this.props.setOpen(false);
    this.props.onSend();
  };
  render() {
    return (
      <div>
        <Dialog onClose={true} open={this.props.open}>
          <DialogTitle onClose={true}>경고</DialogTitle>

          <DialogContent>
            <Typography gutterBottom>
              위험이 감지된 대상입니다. 계속 진행하시겠습니까??
            </Typography>
          </DialogContent>

          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                this.props.setOpen(false);
              }}
            >
              중단
            </Button>

            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                this.KeepGoing();
              }}
            >
              진행
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Sanctions;
