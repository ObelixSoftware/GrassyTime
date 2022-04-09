import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Input } from '@rneui/themed';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import { validateEmail } from '../../utils/validationUtils';

export function LoginScreen({ navigation }) {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<Record<string, string>>({});

    const [emailAddress, setEmail] = useState<string>("lennie.work@gmail.com");
    const [password, setPassword] = useState<string>('5/.Ewt~U=(Ty4S2<');

    const onFooterLinkPress = () => {
        navigation.navigate('Registration');
    }

    const onLoginPress = () => {
        setErrorMessage({})

        if (!validateEmail(emailAddress.trim())) {
            setErrorMessage({email: 'Please enter a valid email address'});
            return;
        }

        if (!password) {
            setErrorMessage({password: 'Please enter a valid password'});
            return;
        }

        setIsLoading(true);

        auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                navigation.navigate('HomeScreen');
            })
            .catch(error => {
                setErrorMessage({email: error.message});
                setIsLoading(false);
            }
        );
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Input
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={emailAddress}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    errorStyle={styles.error}
                    errorMessage={errorMessage.email}
                />
                <Input
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    errorStyle={styles.error}
                    errorMessage={errorMessage.password}
                />
                <Button
                    title={"Login"}
                    loading={isLoading}
                    titleStyle={styles.buttonTitle}
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                </Button>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}