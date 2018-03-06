import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

@inject('store')
@observer
export default class App extends Component {

    render() {
        let { appStore } = this.props.store;

        return (
            <div className="app">
                {appStore.test}
            </div>
        );
    }

}
