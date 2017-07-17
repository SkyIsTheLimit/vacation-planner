import { User } from '../user';

export interface AuthenticationProvider {
    isLoggedIn(): Promise<Boolean>;

    getLoggedInUser(): Promise<User>;

    login(email: string): Promise<User>;

    logout(): Promise<Boolean>;
}