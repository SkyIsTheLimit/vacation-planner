import { async, TestBed } from '@angular/core/testing';

import { DiscoveryProvider } from './discovery';
import { TripCriteria } from '../../models/trip-criteria.model';

describe('Discovery Provider', () => {
    let discoveryProvider,
        criteria;

    beforeEach(() => {
        discoveryProvider = new DiscoveryProvider(null);
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

    it('should be created', () => {
        expect(discoveryProvider instanceof DiscoveryProvider).toBe(true);
    });

    it('Should be able to load trips based on trip criteria', () => {
        discoveryProvider.getTrips(criteria).success((trips) => {
            expect(trips.length).toBe(2);
        });
    });
});