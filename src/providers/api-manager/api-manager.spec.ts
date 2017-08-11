import { TestBed, async, inject } from '@angular/core/testing';
import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ApiManagerProvider } from '../api-manager/api-manager';

describe('API Manager Provider', () => {
    beforeEach(() => {
        // discoveryProvider = new DiscoveryProvider(null);
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                ApiManagerProvider,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });
    });

    it('Should be able to load trips based on trip criteria', inject([ApiManagerProvider, XHRBackend], (apiManager, mockBackend) => {
        apiManager.loadAirports().subscribe(airports => {
            expect(airports).toBeDefined();
            expect(airports.length).toBeGreaterThan(0);
        })
    }));
});