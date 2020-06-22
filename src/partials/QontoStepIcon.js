import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import clsx from 'clsx';

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#9FB6AE',
    display: 'flex',
    height: 30,
    alignItems: 'center',
  },
  active: {
    color: '#42826B',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#104935',
    zIndex: 1,
    fontSize: 18,
  },
});

const QontoStepIcon = (props) => {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
};

QontoStepIcon.propTypes = {
  active: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default QontoStepIcon;
