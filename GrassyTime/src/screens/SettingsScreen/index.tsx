import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { seasons, grassTypes, ISeason, IGrassType } from '../../model/grass';
import GrassTypeView from '../../components/GrassType';
import styles from './styles';
import { Button } from '@rneui/themed';
import myMowingService from '../../services/myMowingService'
import DatePicker from 'react-native-date-picker'

const SettingsScreen = () => {

    const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);

    const [lastMowDate, setLastMowDate] = useState<Date>(new Date());

    const [seasonIsOpen, setSeasonIsOpen] = useState<boolean>(false);
    const [grassTypeIsOpen, setGrassTypeIsOpen] = useState<boolean>(false);
    const [season, setSeason] = useState<ISeason | undefined>(undefined);
    const [selectedSeason, setSelectedSeason] = useState<number | null>(null);
    const [selectedGrassType, setSelectedGrassType] = useState<number | null>(null);
    const [grassType, setGrassType] = useState<IGrassType | undefined>(undefined);

    const grassTypeDetails = (): IGrassType | undefined => grassTypes?.find(g => g.id == grassType!.id);

    useEffect(() => {

        const fetchData = async () => {
            const myMowing = await new myMowingService().get();
            if (myMowing != null) {
                setSelectedSeason(myMowing.seasonId);
                setSelectedGrassType(myMowing.grassTypeId);
                setSeason(seasons.find(s => s.value == myMowing.seasonId));
                setGrassType(grassTypes?.find(g => g.id == myMowing.grassTypeId));
                setLastMowDate(new Date(myMowing.last_mow_date));
            }
        }

        fetchData();

    }, []);

    const save = async () => {
        if (season == null) {
            alert('Season required');
        }
        else if (!grassType) {
            alert('Grass Type required');
        }
        else {
            const rate = season.value == 0 ? grassType!.summer : grassType!.winter;
            const mow_length = grassType!.mow_length;

            await new myMowingService().update({
                id: grassType!.id,
                last_updated: new Date(),
                seasonId: selectedSeason!,
                grassTypeId: selectedGrassType!,
                rate: rate,
                current_length: 0,
                mow_length: mow_length,
                last_mow_date: lastMowDate!
            });

            alert("Saved successfully!")
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <DatePicker
                    modal
                    mode='date'
                    open={isDatePickerOpen}
                    maximumDate={new Date()}
                    date={lastMowDate}
                    onConfirm={(date) => {
                        setIsDatePickerOpen(false)
                        setLastMowDate(date)
                    }}
                    onCancel={() => {
                        setIsDatePickerOpen(false)
                    }}
                />
                <Text style={styles.title}>Season</Text>
                <DropDownPicker
                    style={styles.dropdown}
                    containerStyle={styles.dropdown_container}
                    placeholder="Select A Season"
                    open={seasonIsOpen}
                    items={seasons}
                    value={selectedSeason}
                    setOpen={setSeasonIsOpen}
                    setValue={setSelectedSeason}
                    zIndex={3000}
                    zIndexInverse={1000}
                    onSelectItem={(item) => {
                        setSeason(item);
                    }}
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

                <Text style={styles.title}>Last Mow Date</Text>
                <Button title={lastMowDate.toLocaleDateString()} onPress={() => setIsDatePickerOpen(true)} />

                {
                    grassType != null &&
                    <GrassTypeView details={grassTypeDetails()} />
                }

                <Button
                    title={"Save"}
                    titleStyle={styles.buttonTitle}
                    style={styles.button}
                    onPress={() => save()}></Button>
            </View>
        </ScrollView>
    )

}

export default SettingsScreen;