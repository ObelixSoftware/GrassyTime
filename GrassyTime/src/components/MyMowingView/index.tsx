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
    const display_last_updated = last_updated ? new Date(last_updated).toLocaleDateString() + " " + new Date(last_updated).toLocaleTimeString() : "";
    const season = seasons.find(s => s.value == seasonId);
    const grass = grassTypes.find(g => g.id == grassTypeId);
    const mowTimeReached = current_length! >= mow_length!;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>CURRENT MOWING</Text>
            <Text>Last Updated: {display_last_updated}</Text>
            <Text style={mowTimeReached ? styles.highlight : null}>Current Length: {current_length?.toFixed(2)} cm</Text>
            <Text>Max Length: {mow_length} cm</Text>
            <Text>Season: {season?.title}</Text>
            <Text>Type: {grass?.type}</Text>
            <Text>Rate: {rate} cm</Text>
            {mowTimeReached ? <Text style={styles.error}>Its time to mow!</Text> : null}
        </View>
    )
}

export default MyMowingView;