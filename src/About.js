import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabActions } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const Favorite = () => {
  return <Text>favorite</Text>;
};

const SettingsScreen = () => {
  return (
    <View>
      <Icon name="rocket" size={30} color="black" />
      <Text>sdfsdfs</Text>
    </View>
  );
};

const About = ({navigation, route}) => {
  const {name, password} = route.params;
  return (
    <Tab.Navigator
      barStyle={{
        paddingBottom: 10,
        margin: 10,
        backgroundColor: '#1985b3',
        borderRadius:20,
        overflow: 'hidden',
      }}>
      <Tab.Screen
        name="Home"
        component={Favorite}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={30} />
          ),
          tabBarBadge:2,
          tabBarColor:'red',
        }}
        
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default About;

const styles = StyleSheet.create({});
