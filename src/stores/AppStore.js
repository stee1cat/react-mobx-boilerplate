import { observable } from 'mobx';

export default class AppStore {

    @observable test;

    constructor() {
        this.test = `It's works`;
    }

}
