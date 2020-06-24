import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createAppContainer} from 'react-navigation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Court from './Court';
import Profile from '.Profile';

class Court extends React.Component {
  render() {
    return (
      <View>
            <Text>Court</Text>
      </View>
    )
  }
}

class Profile extends React.Component {
  render() {
    return (
      <View>
            <Text>Profile</Text>
      </View>
    )
  }
}

const TabNavigator = createMaterialBottomTabNavigator({
    Court: {
      screen: Court,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Court',
    activeColor: '#FFFFFFF',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad'},
  }
);

export default createAppContainer(TabNavigator);

