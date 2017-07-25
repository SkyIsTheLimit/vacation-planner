import { OAuthProfile } from '../../../models/o-auth-profile';

export interface OAuthProvider {
    login(): Promise<OAuthProfile>;
    logout(): Promise<Boolean>;
    getAuthenticatedUser(extraInfo: any): Promise<OAuthProfile>;
    isLoggedIn(): Promise<Boolean>;
    getName(): string;

    // Returns the image URL for a button which says Login with <provider>
    getLoginButtonUrl(): string;

    // Returns the image URL for a button which says continue with <provider>
    getContinueButtonUrl(): string;
}