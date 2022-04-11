import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from '../DetailsScreen';
import SettingsScreen from '../SettingsScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Details" component={DetailsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default HomeScreen;