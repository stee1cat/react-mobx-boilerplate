import { observable, action } from 'mobx';

import { RestApi } from '../utils/RestApi';

export default class AccountStore {

    @observable info;

    @action setInfo(info) {
        this.info = info;
    }

    @action async loadInfo() {
        let account = await RestApi.getAccount();

        this.setInfo(account);

        return account;
    }

    reset() {
        this.info = null;
    }

}
