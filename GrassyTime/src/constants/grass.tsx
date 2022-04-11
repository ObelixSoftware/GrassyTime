export interface ISeason {
    title: string;
    value: string;
}

export interface IGrassType {
    id: number;
    type: string;
    summer: number;
    winter: number;
    mow_length: number;
}

export interface IGrassTypeSelectedItem {
    type: string;
    id: number;
}

export const seasons: Array<ISeason> = [
    { title: "Summer", value: 'Summer' },
    { title: 'Winter', value: 'Winter' }
];

export const grassTypes: Array<IGrassType> = [
    { id: 1, type: "Kikuyu", summer: 0.65, winter: 0.45, mow_length: 8.00 },
    { id: 2, type: "Kentucky Blue", summer: 0.76, winter: 0.56, mow_length: 6.50 },
    { id: 3, type: "Buffalo", summer: 0.55, winter: 0.34, mow_length: 7.00 },
    { id: 4, type: "Cynodon", summer: 0.70, winter: 0.51, mow_length: 6.20 }
]
