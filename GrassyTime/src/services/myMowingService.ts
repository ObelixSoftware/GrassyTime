import { IMyMowing } from "../model/MyMowing";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class myMowingService {
    async update(record: IMyMowing): Promise<void> {
        return AsyncStorage.setItem(`myMowing`, JSON.stringify(record));
    }

    async get(): Promise<IMyMowing> {
        return AsyncStorage.getItem(`myMowing`)
            .then((json) => {
                return JSON.parse(json) as IMyMowing;
            });
    }
}