export interface OAuthProfile {
    // The id which can be used to query the provider for more information.
    id: string,

    // Name registered with the provider.
    name: string,

    // Email registered with the provider.
    email: string,

    // Link to the user's photo from the OAuth provider.
    picture: any,

    // Facebook or google
    type: string
}