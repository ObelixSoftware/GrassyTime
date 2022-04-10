import * as React from 'react'
import { RootProps } from '../../Navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from '../DetailsScreen/DetailsScreen';
import SettingsScreen from '../SettingsScreen/SettingsScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = (props: RootProps) => {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Details" component={DetailsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default HomeScreen;