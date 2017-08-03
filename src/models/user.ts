import { OAuthProfile } from './o-auth-profile';

export interface User {
    id: number,
    username: string,
    password: string,
    name: string,
    email: string,
    picture: any;

    linkedAccount: OAuthProfile;
}