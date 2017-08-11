import { async, TestBed } from '@angular/core/testing';

import { TravelCompanionProvider } from './travel-companion';
import { CompanionCriteria } from '../../models/companion-criteria.model'
import { Http } from '@angular/http';
import { Injectable, ReflectiveInjector } from '@angular/core';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, ConnectionBackend, RequestOptions } from '@angular/http';

describe('TravelCompanion Provider', () => {
    let travelCompanionProvider,
        criteria;

    beforeEach(() => {
        this.injector = ReflectiveInjector.resolveAndCreate(
            [{ provide: ConnectionBackend, useClass: MockBackend },
            { provide: RequestOptions, useClass: BaseRequestOptions },
                Http, TravelCompanionProvider]);
        travelCompanionProvider = this.injector.get(TravelCompanionProvider);
    });

    beforeEach(() => {
        criteria = {
            type: 'restaurants',
            keyword: 'cruise',
            location: '-33.8670522,151.1957362',
            radius: '500'
        };
    });

    it('should be created', () => {
        expect(travelCompanionProvider instanceof TravelCompanionProvider).toBe(true);
    });

    it('Should be able to give relavant restaurants', () => {
        var result = travelCompanionProvider.searchNearByRestaurants(criteria);
        expect(result != null).toBe(true);
    });
});