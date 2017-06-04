import { async, TestBed } from '@angular/core/testing';

import { ExpenseLogProvider } from './expense-log';

describe('ExpenseLog Provider', () => {
    let expenseLogProvider,
        data;

    beforeEach(() => {
        expenseLogProvider = new ExpenseLogProvider (null);
    });

    beforeEach(() => {
        data = {
            countryCode : 'USA',
	        currencyCode : 'USD'
        };
    });

    it('should be created', () => {
        expect(expenseLogProvider instanceof ExpenseLogProvider).toBe(true);
    });

    it('Should be able to return an estimated daily expenditure to the user', () => {
        expenseLogProvider.estimatedDailyExpenditure(data).success((estimate) => {
		    expect(estimate).toBeGreaterThan(0);
        });
    });
});