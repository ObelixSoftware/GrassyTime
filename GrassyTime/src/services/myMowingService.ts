import { IMyMowing } from "../model/MyMowing";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { INCREASE_GROWTH_DAY } from "../model/grass";

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
            const difference = (new Date().getTime() - new Date(myMowing.last_updated).getTime());
            if (difference > INCREASE_GROWTH_DAY) {
                this.increase(myMowing)
            }
        }
    }

    async increase(myMowing: IMyMowing): Promise<void> {
        myMowing.last_updated = new Date();
        myMowing.current_length += myMowing!.rate;
        await this.update(myMowing);
    }
}