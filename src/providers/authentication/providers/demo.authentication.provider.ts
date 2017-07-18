import { AuthenticationProvider } from './provider';
import { User } from '../user';

export class DemoAuthenticationProvider implements AuthenticationProvider {
    demoUser = {
        id: 1,
        username: 'foo',
        name: 'Test User',
        email: 'foo@baz.com',
        linkedProviders: []
    };
    loggedInStatus = true;

    isLoggedIn(): Promise<Boolean> {
        return new Promise<Boolean>(() => {
            return this.loggedInStatus;
        });
    }

    getLoggedInUser(): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            if (this.loggedInStatus) {
                resolve(this.demoUser);
            } else {
                reject();
            }
        });
    }

    login(email) {
        return new Promise<User>((resolve, reject) => {
            this.loggedInStatus = true;

            resolve(this.demoUser);
        });
    }

    logout() {
        return new Promise<Boolean>((resolve, reject) => {
            this.loggedInStatus = false;

            resolve(this.loggedInStatus);
        });
    }

    signup(email) {
        return this.login(email);
    }
}