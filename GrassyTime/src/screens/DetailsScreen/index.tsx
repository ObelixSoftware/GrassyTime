import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Button } from '@rneui/themed';
import { RootProps } from '../../navigation';
import styles from './styles';
import myMowingService from '../../services/myMowingService'
import { IMyMowing } from '../../model/MyMowing';
import MyMowingView from '../../components/MyMowingView';
import { ScrollView } from 'react-native-gesture-handler';

const DetailsScreen = (props: RootProps) => {

    const { navigation } = props;

    const [myMowing, setMyMowing] = useState<IMyMowing | null>(null);

    useEffect(() => {

        const fetchData = async () => {
            const service = new myMowingService();
            const mowing = await service.get();
            alert(JSON.stringify(mowing))
            setMyMowing(mowing);
        }

        fetchData();

    }, []);

    const signOut = () => {
        auth()
            .signOut()
            .then(() => {
                console.log('User signed out!');
                navigation.navigate("Login");
            });
    }

    return (
        <ScrollView>
            <View>
                {myMowing !== null ? <MyMowingView details={myMowing} /> : <Text style={styles.error}>Configure your grass type under Settings</Text>}
            </View>
        </ScrollView>
    )
}

export default DetailsScreen;