import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    flexContainer: {
      display: 'flex',
      flexWrap: 'nowrap',
    },
    width: 300,
    height: 80,
    backgroundColor: "#FFFFFF"
  },
});

export default function BookingBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Court" />
      <BottomNavigationAction label="Profile"  />
    </BottomNavigation>
  );
}
