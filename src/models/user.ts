import { OAuthProfile } from './o-auth-profile';

export interface User {
    id: number,
    username: string,
    name: string,
    email: string,
    picture: any;

    linkedAccounts: Array<OAuthProfile>
}