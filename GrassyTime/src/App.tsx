import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { RootNavigation } from './navigation';
import { ThemeProvider, createTheme } from '@rneui/themed';

const Stack = createNativeStackNavigator<RootNavigation>();

const theme = createTheme({
  lightColors: {
    primary: 'rgb(52, 140, 49)'
  }
});

function App() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} user={user} />}
          </Stack.Screen>
          <Stack.Screen name="Login" component={LoginScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
             <Stack.Screen name="Home" component={HomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
