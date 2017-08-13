import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import {
    StatusBarMock,
    SplashScreenMock
} from 'ionic-mocks';

describe('MyApp Component', () => {
    let fixture;
    let component;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyApp],
            imports: [
                IonicModule.forRoot(MyApp)
            ],
            providers: [
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock }
            ]
        });
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(MyApp);
        component = fixture.componentInstance;
    });
    
    it('should be created', () => {
        expect(component instanceof MyApp).toBe(true);
    });
    
    it('should have one page', () => {
        expect(component.pages.length).toBe(1);
    });
});