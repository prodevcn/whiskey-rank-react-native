import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {Badge} from 'native-base';

/** import activity screens */
import ActivityHome from '../screens/MainScreens/ActivityScreens/ActivityHome';

/** import maps screens */
import MapsHome from '../screens/MainScreens/MapsScreens/MapsHome';

/** import discover screens */
import DiscoverHome from '../screens/MainScreens/DiscoverScreens/DiscoverHome';
import RateDetail from '../screens/MainScreens/DiscoverScreens/RateDetail';

/** import notifications screens */
import NotificationHome from '../screens/MainScreens/NotificationScreens/NotificationHome';

/** import profile screens */
import ProfileHome from '../screens/MainScreens/ProfileScreens/ProfileHome';

import ActivityIcon from '../../assets/images/svg/activity.svg';
import MapIcon from '../../assets/images/svg/map.svg';
import DiscoverIcon from '../../assets/images/svg/discover.svg';
import NotificationIcon from '../../assets/images/svg/notification.svg';
import ProfileIcon from '../../assets/images/svg/profile.svg';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const BottomTab = createBottomTabNavigator();

const ActivityNavigation = () => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator initialRouteName="activity-home">
      <Stack.Screen
        name="activity-home"
        component={ActivityHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MapsNavigation = () => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator initialRouteName="maps-home">
      <Stack.Screen
        name="maps-home"
        component={MapsHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DiscoverNavigation = () => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator initialRouteName="discover-home">
      <Stack.Screen
        name="discover-home"
        component={DiscoverHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="rate-detail"
        component={RateDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const NotificationNavigation = () => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator initialRouteName="notification-home">
      <Stack.Screen
        name="notification-home"
        component={NotificationHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ProfileNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="profile-home">
      <Stack.Screen
        name="profile-home"
        component={ProfileHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="activity"
      barStyle={styles.tabBar}
      shifting={false}>
      {/* <Tab.Screen
        name="activity"
        component={ActivityNavigation}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({color, size, focused}) => (
            <ActivityIcon
              width={20}
              height={20}
              color={focused ? '#fbbf24' : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="maps"
        component={MapsNavigation}
        options={{
          tabBarLabel: 'Maps',
          tabBarIcon: ({color, size, focused}) => (
            <MapIcon
              width={20}
              height={20}
              color={focused ? '#fbbf24' : color}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="discover"
        component={DiscoverNavigation}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({color, size, focused}) => (
            <DiscoverIcon
              width={20}
              height={20}
              color={focused ? '#fbbf24' : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={NotificationNavigation}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color, size, focused}) => (
            <NotificationIcon
              width={20}
              height={20}
              color={focused ? '#fbbf24' : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileNavigation}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size, focused}) => (
            <ProfileIcon
              width={20}
              height={20}
              color={focused ? '#fbbf24' : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// const MainNavigation = () => {
//   return (
//     <BottomTab.Navigator initialRouteName="discover">
//       <BottomTab.Screen
//         name="discover"
//         component={DiscoverNavigation}
//         options={{
//           tabBarLabel: 'Discover',
//           tabBarIcon: ({color, size, focused}) => (
//             <DiscoverIcon
//               width={20}
//               height={20}
//               color={focused ? '#fbbf24' : color}
//             />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name="notification"
//         component={NotificationNavigation}
//         options={{
//           tabBarLabel: 'Notifications',
//           tabBarIcon: ({color, size, focused}) => (
//             <NotificationIcon
//               width={20}
//               height={20}
//               color={focused ? '#fbbf24' : color}
//             />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name="profile"
//         component={ProfileNavigation}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color, size, focused}) => (
//             <ProfileIcon
//               width={20}
//               height={20}
//               color={focused ? '#fbbf24' : color}
//             />
//           ),
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// };

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
  },
});

export default MainNavigation;
