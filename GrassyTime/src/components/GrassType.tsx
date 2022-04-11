import React from 'react';
import { View, Text } from 'react-native';
import { IGrassType } from '../constants/grass';

interface IGrassTypeView {
    details: IGrassType | undefined;
}

const GrassTypeView = (props: IGrassTypeView) => {
    const { type, summer, winter, mow_length } = props?.details || {};

    return (
        <View>
            <Text>Type: {type}</Text>
            <Text>Growth Rate Per Day In Summer: {summer} cm</Text>
            <Text>Growth Rate Per Day In Winter: {winter} cm</Text>
            <Text>Best Length to Mow: {mow_length} cm</Text>
        </View>
    )
}

export default GrassTypeView;
