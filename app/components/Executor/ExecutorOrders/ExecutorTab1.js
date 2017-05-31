import React, { Component } from 'react';
import {
    View,
    ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../../../config/data';

import styles from '../../../styles/styles';

export default class ExecutorMain1 extends Component {
    onLearnMore = (user) => {
        this.props.navigation.navigate('Detail', { ...user });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <List containerStyle={{ marginTop: 0 }}>
                        {users.map((user) => (
                            <ListItem
                                key={user.login.username}
                                title={user.location.postcode}
                                subtitle={user.email}
                                onPress={() => this.onLearnMore(user)}
                            />
                        ))}
                    </List>
                </ScrollView>
            </View>
        );
    }
}

