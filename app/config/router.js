import React from 'react';
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator
} from 'react-navigation';

import { Icon } from 'react-native-elements';
import Colors from '../styles/colors/Colors';

import LoginPhone from '../components/Login/LoginPhone';
import LoginSMS from '../components/Login/LoginSMS';

import ExecutorTab1 from '../components/Executor/ExecutorOrders/ExecutorTab1';
import ExecutorTab2 from '../components/Executor/ExecutorOrders/ExecutorTab2';
import ExecutorTab3 from '../components/Executor/ExecutorOrders/ExecutorTab3';
import ExecutorTab4 from '../components/Executor/ExecutorOrders/ExecutorTab4';

import ExecutorSettings from '../components/Executor/ExecutorSettings/ExecutorSettings';
import ExecutorOrderDetail from '../components/Executor/ExecutorOrders/ExecutorOrderDetail';


const slideTransition = {
    transitionConfig: () => ({
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [layout.initWidth, 0, 0]
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
                outputRange: [0, 1, 1, 0.3, 0]
            });

            return { opacity, transform: [{ translateX }] };
        }
    })
};


export const LoginScreens = StackNavigator({

    LoginPhone: {
        screen: LoginPhone
    },
    LoginSMS: {
        screen: LoginSMS
    }
}, slideTransition);

const OrdersStack = StackNavigator({
    Feed: {
        screen: ExecutorTab1
    },
    Detail: {
        screen: ExecutorOrderDetail
    }
}, {
        mode: 'modal',
        headerMode: 'none',
    });

export const Tabs = TabNavigator({
    ExecutorTab1: {
        screen: OrdersStack
    },
    ExecutorTab2: {
        screen: ExecutorTab2
    },
    ExecutorTab3: {
        screen: ExecutorTab3
    },
    ExecutorTab4: {
        screen: ExecutorTab4
    }
}, {
        tabBarOptions: {
            style: {
                backgroundColor: Colors.main
            }
        }
    });

export const DrawerOrders = DrawerNavigator({
    ExecutorOrders: {
        screen: Tabs,
        navigationOptions: {
            title: 'Заказы'
        }
    },
    ExecutorSettings: {
        screen: ExecutorSettings,
        navigationOptions: {
            title: 'Настройки'
        }
    }
});

const DrawerIcon = ({ navigate }) => {
    return (
        <Icon
            name="md-menu"
            type="ionicon"
            size={35}
            color="black"
            style={{ paddingRight: 20 }}
            onPress={() => navigate('DrawerOpen')}
        />
    );
};

export const Root = StackNavigator({

    Home: {
        screen: LoginScreens
    },
    Tabs: {
        screen: DrawerOrders,
        navigationOptions: ({ navigation }) => ({
            headerRight: <DrawerIcon {...navigation} />
        }),
    }
}, slideTransition);

