import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(16, 73, 53, 0.32);',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#104935',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export default StyledTabs;
