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

    async updateMowing(): Promise<void> {
        var myMowing = await this.get();
        if (myMowing !== null) {
            const last_updated = myMowing.last_updated;
            /*if((new Date().getTime() - last_updated) > (60 * 60 * 24 * 1000)) {
                myMowing.last_updated = new Date();
                myMowing.current_length += myMowing!.rate;
                this.update(myMowing);
            }*/
        }
    }
}