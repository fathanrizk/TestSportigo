import React, {Component} from 'react';
import { BottomNavigationAction } from '@material-ui/core';

<BottomNavigation
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  showLabels
  className={classes.root}
>
  <BottomNavigationAction label="Court" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Profile" icon={<FavoriteIcon />} />
</BottomNavigation>