import { async, TestBed } from '@angular/core/testing';

import { CurrencyManagerProvider } from './currency-manager';

describe('CurrencyManager Provider', () => {
    let currencyManagerProvider,
        data;

    beforeEach(() => {
        currencyManagerProvider = new CurrencyManagerProvider(null);
    });

    beforeEach(() => {
        data = {
            price: 10000,
            currency: 'INR',
            tocurrency: 'USD',
        };
    });

    it('should be created', () => {
        expect(currencyManagerProvider instanceof CurrencyManagerProvider).toBe(true);
    });

    it('Should be able to provide the converted currency', () => {
        currencyManagerProvider.convertcurrency(data).success((event) => {
            expect(event).toBeDefined;
        });
    });
});