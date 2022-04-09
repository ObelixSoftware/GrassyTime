import * as React from 'react'
import { Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import { Button } from '@rneui/themed';
import styles from './styles';

export function HomeScreen(props) {

    const signOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
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