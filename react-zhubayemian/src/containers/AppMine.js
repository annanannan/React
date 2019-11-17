import React, { Component } from 'react';
import { NavBar} from 'antd-mobile';
export default class AppMine extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                    ]}
                    >我的</NavBar>
            </div>
        );
    }
}