import { StyleSheet } from 'react-native';

import Colors from './colors/Colors';

export default StyleSheet.create({
    container: {
        alignItems: 'stretch',
        backgroundColor: Colors.background.dark,
        flex: 1
    },
    text: {
        color: Colors.text.primary.light,
        fontSize: 16
    },
    logocontainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    formContainer: {
        marginVertical: 20,
        flexGrow: 2
    },
    formLabel: {
        color: Colors.rgbaLight,
        marginBottom: 5,
        marginLeft: 15
    },
    formInput: {
        fontSize: 24,
        color: Colors.rgbaLight,
        width: '100%',
        height: 50,
        backgroundColor: Colors.rgbaDark,
        padding: 10
    },
    formButton: {
        marginTop: 10,
        backgroundColor: Colors.main
    },
    navIcon: {
        color: 'black',
        fontSize: 30,
        marginRight: 15
    }
});
