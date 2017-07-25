import { OAuthProvider } from './o-auth-provider';
import { User, OAuthProfile } from '../../../models';

export interface AuthenticationProvider {
    login(credentials: Object): Promise<User>;
    logout(): Promise<Boolean>;
    signup(credentials: Object): Promise<User>;
    getAuthenticatedUser(): Promise<User>;
    isLoggedIn(): Promise<Boolean>;
    getLinkedProviders(): Array<OAuthProvider>;
}