import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { seasons, grassTypes, ISeason, IGrassType, IGrassTypeSelectedItem } from '../../constants/grass';
import GrassTypeView from '../../components/GrassType';
import styles from './styles';

const SettingsScreen = () => {

    const [seasonIsOpen, setSeasonIsOpen] = useState<boolean>(false);
    const [grassTypeIsOpen, setGrassTypeIsOpen] = useState<boolean>(false);
    const [season, setSeason] = useState<ISeason | null>(null);
    const [selectedGrassType, setSelectedGrassType] = useState<IGrassType | undefined>(undefined);
    const [grassType, setGrassType] = useState<IGrassTypeSelectedItem | undefined>(undefined);

    const grassTypeDetails = (): IGrassType | undefined => grassTypes?.find(g => g.id == grassType!.id);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Season</Text>
            <DropDownPicker
                style={styles.dropdown}
                containerStyle={styles.dropdown_container}
                placeholder="Select A Season"
                open={seasonIsOpen}
                items={seasons}
                value={season}
                setOpen={setSeasonIsOpen}
                setValue={setSeason}
                zIndex={3000}
                zIndexInverse={1000}
                schema={{
                    label: 'title',
                    value: 'value'
                }}
            />

            <Text style={styles.title}>Grass Type</Text>

            <DropDownPicker
                style={styles.dropdown}
                containerStyle={styles.dropdown_container}
                placeholder="Select A Grass Type"
                open={grassTypeIsOpen}
                items={grassTypes}
                value={selectedGrassType}
                setOpen={setGrassTypeIsOpen}
                setValue={setSelectedGrassType}
                zIndex={2000}
                zIndexInverse={2000}
                onSelectItem={(item) => {
                    setGrassType(item);
                }}
                schema={{
                    label: 'type',
                    value: 'id'
                }}
            />

            {
                grassType != null &&
                <GrassTypeView details={grassTypeDetails()} />
            }

        </View>
    )

}

export default SettingsScreen;