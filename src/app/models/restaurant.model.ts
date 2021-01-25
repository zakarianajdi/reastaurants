export interface Restaurant {
    [x: string]: any;
    name: string;
    address: string;
    longitude: number;
    latitude: number;
    borough: string;
    cuisine: string;
    date: Date;
    grade: number;
    score: number;
}