export interface OAuthProvider {
    // 'facebook' or 'google'
    type: string;

    // the id which can be used to query the provider for more information.
    id: string;
}