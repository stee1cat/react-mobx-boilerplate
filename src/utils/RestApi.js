import axios from 'axios';
import querystring from 'querystring';
import merge from 'deepmerge';

import { LocalStorageKeys, localStorageService } from './LocalStorage';

const ENDPOINT = '/';
const AUTHORIZATION_HEADER = 'Authorization';

let method = action => ENDPOINT + action.trim('/');

function isAuthenticationError(e) {
    return e && e.response && e.response.status === 401;
}

export class RestApi {

    static get config() {
        return {
            headers: {
                [AUTHORIZATION_HEADER]: localStorageService.get(LocalStorageKeys.Token)
            }
        };
    }

    static async onSuccess(response) {
        let data = response.data;

        return response.data;
    }

    static async onFailure(error) {
        if (isAuthenticationError(error)) {
            localStorageService.remove(LocalStorageKeys.Token);
        }

        return Promise.reject(error);
    }

    static async get(action, params = {}) {
        try {
            let data = await axios.get(method(action), {
                params,
                ...RestApi.config
            });

            return RestApi.onSuccess(data);
        }
        catch (error) {
            return RestApi.onFailure(error);
        }
    }

    static async post(action, params) {
        try {
            let data = await axios.post(method(action), querystring.stringify(params), merge(RestApi.config, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }));

            return RestApi.onSuccess(data);
        }
        catch (error) {
            return RestApi.onFailure(error);
        }
    }

    static async getAccount() {
        return RestApi.get('api/account');
    }

}


