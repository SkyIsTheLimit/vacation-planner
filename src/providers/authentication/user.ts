import { OAuthProvider } from './oauth-provider';

export interface User {
    id: number;
    username: string;
    email: string;
    name: string;

    linkedProviders: Array<OAuthProvider>;
}