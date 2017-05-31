import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { CheckBox } from 'react-native-elements';

import styles from '../../../styles/styles';

export default class ExecutorSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }
    toggle() {
        this.setState({ checked: !this.state.checked });
    }
    render() {
        return (
            <View style={styles.container}>
                <CheckBox
                    title='Click Here'
                    iconType='ionicon'
                    checkedIcon='ios-checkbox-outline'
                    uncheckedIcon='ios-square-outline'
                    checked={this.state.checked}
                    onPress={this.toggle.bind(this)}
                />

            </View>
        );
    }
}
