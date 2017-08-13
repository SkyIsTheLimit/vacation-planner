export interface SearchCriteria {
    // query: string;
    // budget: number;
    destination: {
        airportCode: string,
        city: string,
        country: string
    },
    origin: {
        airportCode: string,
        city: string,
        country: string
    }
    hotelInformation: {
        numberOfGuests: number,
        numberOfRooms: number
        ratings: Array<number>
    },
    budgetLimit: number,
    currency: string,
    startDate: number,
    endDate: number,
}