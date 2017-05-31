import React, { Component } from 'react';
import {
    View,
    Image,
    Platform
} from 'react-native';
import axios from 'axios';
import { FormLabel, FormInput, Button } from 'react-native-elements';

import styles from '../../styles/styles';

export default class LoginPhone extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor() {
        super();
        this.state = {
            tel: ''
        };
    }

    onSMSLogin = () => {
        this.props.navigation.navigate('LoginSMS');
    }

    onRegisterPressed() {
        axios({
            method: 'post',
            url: 'http://igcare.lenal.work/mobile_dev/',
            responseType: 'json',
            params: {
                phone: this.state.tel
            },
        })
            .then((response) => {
                const res = response.status;

                if (res >= 200 && res < 300) {
                    // console.log(response.data.code);
                    this.onSMSLogin();
                } else {
                    throw res;
                }
            })
            .catch((errors) => {
                console.log(`catch error: ${errors}`);
            });
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logocontainer}>
                    <Image
                        source={require('../../images/logo.png')}
                        style={{ height: 231, width: 200 }}
                    />
                </View>

                <View style={styles.formContainer}>
                    <FormLabel labelStyle={styles.formLabel}>PHONE</FormLabel>
                    <FormInput
                        inputStyle={styles.formInput}
                        onChangeText={(val) => this.setState({ tel: val })}
                        keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'phone-pad'}
                        placeholder="+"
                        defaultValue="+"
                        placeholderTextColor='rgba(255,255,255, 0.2)'
                        returnKeyType='next'
                        underlineColorAndroid={'transparent'}
                    />
                    <Button
                        buttonStyle={styles.formButton}
                        icon={{ name: 'md-arrow-forward', type: 'ionicon' }}
                        onPress={this.onRegisterPressed.bind(this)}
                        iconRight
                        title='NEXT'
                    />
                </View >

            </View>
        );
    }
}

