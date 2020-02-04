import { IConfiguration } from './IConfiguration'

export default class Configuration implements IConfiguration {
    get AuthUrl(): string {
        const url = process.env.AUTH_URL
        if (!url) {
            throw new Error('AUTH_URL is not defined')
        }

        return url
    }

    get OauthSwaggerUrl(): string {
        const url = process.env.AUTH_URL
        if (!url) {
            throw new Error('OAUTH_SWAGGER_URL is not defined')
        }

        return url
    }

    get ApiSwaggerUrl(): string {
        const url = process.env.API_SWAGGER_URL
        if (!url) {
            throw new Error('AUTH_URL is not defined')
        }

        return url
    }
}
