import { TestBed, async, inject } from '@angular/core/testing';
import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { DiscoveryProvider } from './discovery';
import { ApiManagerProvider } from '../api-manager/api-manager';
import { TripCriteria } from '../../models/trip-criteria.model';

describe('Discovery Provider', () => {
    let criteria: TripCriteria;

    beforeEach(() => {
        // discoveryProvider = new DiscoveryProvider(null);
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                DiscoveryProvider,
                ApiManagerProvider,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });
    });

    beforeEach(() => {
        criteria = {
            query: 'round-trip',
            startDate: new Date(),
            endDate: new Date(),
            budget: 100000,
            currency: 'INR',
            destinations: [
                { country: 'Thailand', countryIsoCode: 'THA', city: 'Pattaya' },
                { country: 'Singapore', countryIsoCode: 'SGP', city: 'Singapore' }
            ]
        };
    });

    it('Should be able to load trips based on trip criteria', inject([DiscoveryProvider, XHRBackend], (discoveryProvider, mockBackend) => {
        const mockResponse = {
            data: [
                { id: 'trip_1' },
                { id: 'trip_2' }
            ]
        };

        mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(mockResponse)
            })));
        });

        discoveryProvider.getTrips().subscribe((trips) => {
            expect(trips.length).toBe(2);
        });
    }));
});