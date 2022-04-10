import * as React from 'react'
import { Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import { Button } from '@rneui/themed';
import styles from './styles';
import { HomeProps } from '../../Navigation';
import { NavigationContainerRefContext } from '@react-navigation/native';

const HomeScreen = (props: HomeProps) => {

    const { navigation } = props;

    const signOut = () => {
        auth()
            .signOut()
            .then(() => {
                console.log('User signed out!');     
                navigation.navigate("Login");           
            });
    }

    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title={"Signout"}
                titleStyle={styles.buttonTitle}
                style={styles.button}
                onPress={() => signOut()}></Button>
        </View>
    )
}

export default HomeScreen;