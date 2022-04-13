export interface IMyMowing {
    id: number;
    last_updated: Date;
    seasonId: number;
    grassTypeId: number;
    rate: number;
    current_length: number;
    mow_length: number;
    last_mow_date: Date;
}