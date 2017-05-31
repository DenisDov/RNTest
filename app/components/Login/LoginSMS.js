import React, { Component } from 'react';
import {
    View,
    Image,
    Platform
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

import styles from '../../styles/styles';

export default class LoginSMS extends Component {
    static navigationOptions = {
        header: null,
    }
    onSMSSuccess = () => {
        this.props.navigation.navigate('Tabs');
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logocontainer}>
                    <Image
                        source={require('../../images/logo.png')}
                        style={{ height: 200, width: 169 }}
                    />
                </View>

                <View style={styles.formContainer}>
                    <FormLabel labelStyle={styles.formLabel}>{'Enter code from SMS message'.toUpperCase()}</FormLabel>
                    <FormInput
                        inputStyle={styles.formInput}
                        onChangeText={(code) => this.setState({ tel: code })}
                        keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                        placeholderTextColor='rgba(255,255,255, 0.2)'
                        returnKeyType='next'
                        maxLength={4}
                        underlineColorAndroid={'transparent'}
                    />
                    <Button
                        buttonStyle={styles.formButton}
                        icon={{ name: 'md-arrow-forward', type: 'ionicon' }}
                        iconRight
                        title='NEXT'
                        onPress={this.onSMSSuccess.bind(this)}
                    />
                </View >

            </View>
        );
    }
}

