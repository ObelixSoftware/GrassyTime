import React from 'react';
import { View, Text } from 'react-native';
import { IMyMowing } from '../../model/MyMowing';
import styles from './styles';
import { grassTypes, seasons } from '../../model/grass';

interface IMyMowingViewProp {
    details: IMyMowing | null;
}

const MyMowingView = (props: IMyMowingViewProp) => {    
    const { last_updated, seasonId, grassTypeId, rate, current_length, mow_length } = props?.details || {};
    const season = seasons.find(s => s.value == seasonId);
    const grass = grassTypes.find(g => g.id == grassTypeId);

    return (
            <View style={styles.container}>
                    <Text style={styles.header}>CURRENT MOWING</Text>
                    <Text>Last Updated: {last_updated}</Text>
                    <Text>Current Length: {current_length} cm</Text>
                    <Text>Max Length: {mow_length} cm</Text>
                    <Text>Season: {season}</Text>
                    <Text>Type: {grass?.type}</Text>
                    <Text>Rate: {rate} cm</Text>
            </View>
    )
}

export default MyMowingView;