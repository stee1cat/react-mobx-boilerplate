import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

@inject('stores')
@observer
export default class App extends Component {

    render() {
        let { appStore } = this.props.stores;

        return (
            <div className="app">
                {appStore.test}
            </div>
        );
    }

}
