import { IConfiguration } from './IConfiguration'

export default class Configuration implements IConfiguration {
    get LoginUrl(): string {
        const url = process.env.LOGIN_URL
        if (!url) {
            throw new Error('LOGIN_URL is not defined')
        }

        return url
    }

    get OauthSwaggerUrl(): string {
        const url = process.env.OAUTH_SWAGGER_URL
        if (!url) {
            throw new Error('OAUTH_SWAGGER_URL is not defined')
        }

        return url
    }

    get ApiSwaggerUrl(): string {
        const url = process.env.API_SWAGGER_URL
        if (!url) {
            throw new Error('API_SWAGGER_URL is not defined')
        }

        return url
    }
}
