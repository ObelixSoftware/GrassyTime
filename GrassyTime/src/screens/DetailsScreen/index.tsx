import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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
            service.updateMowing();
            setMyMowing(mowing);
        }

        const unsubscribe = navigation.addListener('focus', () => {
            fetchData();
        });

        return unsubscribe;

    }, [navigation]);

    const increase = async () => {
        const service = new myMowingService();
        await service.increase(myMowing!);
        const mowing = await service.get();
        setMyMowing(mowing);
    }

    return (
        <ScrollView>
            <View>
                {myMowing !== null ? <MyMowingView details={myMowing} /> : <Text style={styles.error}>Configure your grass type under Settings</Text>}
                <Button
                    title={"Increase (Testing)"}
                    titleStyle={styles.buttonTitle}
                    style={styles.button}
                    onPress={() => increase()}></Button>
            </View>
        </ScrollView>
    )
}

export default DetailsScreen;