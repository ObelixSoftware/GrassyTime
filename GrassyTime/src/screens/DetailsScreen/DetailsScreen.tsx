import * as React from 'react'
import { Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import { Button } from '@rneui/themed';
import { RootProps } from '../../Navigation';
import styles from './styles';

const DetailsScreen = (props: RootProps) => {

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
            <Button
                title={"Signout"}
                titleStyle={styles.buttonTitle}
                style={styles.button}
                onPress={() => signOut()}></Button>
        </View>
    )
}

export default DetailsScreen;