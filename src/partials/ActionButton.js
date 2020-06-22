import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ActionButton = (props) => {
  const { text, onClick } = props;
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActionButton;
