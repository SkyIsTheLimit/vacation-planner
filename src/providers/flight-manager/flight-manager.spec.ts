import { TestBed, async, inject } from '@angular/core/testing';
import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { FlightManagerProvider } from './flight-manager';
// import { ApiManagerProvider } from '../api-manager/api-manager';
import { SearchCriteria } from '../../models/search-criteria';

describe('Flight Manager Provider', () => {
    let criteria: SearchCriteria;

    beforeEach(() => {
        // discoveryProvider = new DiscoveryProvider(null);
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                FlightManagerProvider,
                // ApiManagerProvider,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });
    });

    beforeEach(() => {
        criteria = {
            startDate: new Date().getTime(),
            endDate: new Date().getTime(),
            budgetLimit: 100000,
            currency: 'INR',
            destination: {
                country: 'Singapore',
                airportCode: 'SIN',
                city: 'Singapore'
            },
            origin: {
                country: 'India',
                airportCode: 'BLR',
                city: 'Bangalore'
            },
            hotelInformation: {
                numberOfGuests: 2,
                numberOfRooms: 1,
                ratings: [3, 5]
            }
        };
    });

    it('Should be able to find flights matching the selection criteria', inject([FlightManagerProvider, XHRBackend]
        , (flightManagerProvider, mockBackend) => {
            const mockResponse = {};

            mockBackend.connections.subscribe((connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            });

            flightManagerProvider.fetchMatchingFlights(criteria).subscribe((flights) => {
                expect(flights.length).toBeDefined;
            });
        }));

    it('Should be able to find hotels matching the selection criteria', inject([FlightManagerProvider, XHRBackend]
        , (flightManagerProvider, mockBackend) => {
            const mockResponse = {};

            mockBackend.connections.subscribe((connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            });

            flightManagerProvider.manageReturnedHotels(criteria).subscribe((hotels) => {
                expect(hotels.length).toBeDefined;
            });
        }));
});