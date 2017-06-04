import { async, TestBed } from '@angular/core/testing';

import { FinancePlannerProvider } from './finance-planner';

describe('FinancePlanner Provider', () => {
    let financePlannerProvider,
        data;

    beforeEach(() => {
        financePlannerProvider = new FinancePlannerProvider(null);
    });

    beforeEach(() => {
        data = {
            totalExpectedExpenditure: 100000,
            months: 12,
            currency: 'INR',
        };
    });

    it('should be created', () => {
        expect(financePlannerProvider instanceof FinancePlannerProvider).toBe(true);
    });

    it('Should be able to provide a plan', () => {
        financePlannerProvider.monthlySavings(data).success((plan) => {
            expect(plan.length).toBeGreaterThan(0);
        });
    });
});