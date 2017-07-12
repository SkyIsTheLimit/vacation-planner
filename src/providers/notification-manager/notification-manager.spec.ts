import { async, TestBed } from '@angular/core/testing';

import { NotificationManagerProvider } from './notification-manager';

describe('NotificationManager Provider', () => {
    let notificationManagerProvider,
        mockEvent;

    beforeEach(() => {
        notificationManagerProvider = new NotificationManagerProvider(null);
    });

    beforeEach(() => {
        mockEvent = {
            price: 10000,
            currency: 'INR',
            destinations: [
                { country: 'Thailand', countryIsoCode: 'THA', city: 'Pattaya' },
                { country: 'Singapore', countryIsoCode: 'SGP', city: 'Singapore' }
            ]
        };
    });

    it('should be created', () => {
        expect(notificationManagerProvider instanceof NotificationManagerProvider).toBe(true);
    });

    it('Should be able to listen for price change', () => {
        notificationManagerProvider.listenEvent(mockEvent).success((event) => {
            expect(event.length).toBe(1);
        });
    });

    /*it('Should be able to list all notifications', () => {
        notificationManagerProvider.getNotifications().success((event) => {
            expect(event.length).toBe(1);
        });
    });*/
});