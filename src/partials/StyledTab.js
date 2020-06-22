import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#222B45',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    margin: '0 auto',
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => {
  return <Tab disableRipple {...props} />;
});

export default StyledTab;
