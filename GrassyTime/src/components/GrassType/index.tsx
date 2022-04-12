import React from 'react';
import { View, Text } from 'react-native';
import { IGrassType } from '../../model/grass';
import styles from './styles';

interface IGrassTypeView {
    details: IGrassType | undefined;
}

const GrassTypeView = (props: IGrassTypeView) => {
    const { type, summer, winter, mow_length } = props?.details || {};

    return (
        <View style={styles.container}>
            <Text style={styles.line}>Type: {type}</Text>
            <Text style={styles.line}>Growth Rate Per Day In Summer: {summer} cm</Text>
            <Text style={styles.line}>Growth Rate Per Day In Winter: {winter} cm</Text>
            <Text style={styles.line}>Best Length to Mow: {mow_length} cm</Text>
        </View>
    )
}

export default GrassTypeView;
