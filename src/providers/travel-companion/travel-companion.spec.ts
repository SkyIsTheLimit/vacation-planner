import { async, TestBed } from '@angular/core/testing';

import { TravelCompanionProvider } from './travel-companion';

describe('TravelCompanion Provider', () => {
    let travelCompanionProvider,
        criteria;

    beforeEach(() => {
        travelCompanionProvider = new TravelCompanionProvider(null);
    });

    beforeEach(() => {
        criteria = {
            query: 'search-restaurants',
            queryString: "brunches", 
            location: [
                { country: 'Thailand', countryIsoCode: 'THA', city: 'Pattaya' }
            ]
        };
    });

    it('should be created', () => {
        expect(travelCompanionProvider instanceof TravelCompanionProvider).toBe(true);
    });

    it('Should be able to give relavant restaurants', () => {
        travelCompanionProvider.getTrips(criteria).success((results) => {
            expect(results.length).toBeDefined;
        });
    });
});