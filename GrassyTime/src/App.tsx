import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from '@rneui/themed';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

function App() {
  // Set an initializing state whilst Firebase connects
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  function doLogin() {
    auth()
      .signInWithEmailAndPassword('lennie.work@gmail.com', '5/.Ewt~U=(Ty4S2<')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  if (loading) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
        <Button
          title="Login"
          onPress={() => {
            doLogin();
          }}
        />
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}

export default App;
