import { Destination } from './destination';

export interface TripCriteria {
    query: string;
    budget: number;
    currency: string;
    startDate: Date;
    endDate: Date;
    destinations: Array<Destination>
}