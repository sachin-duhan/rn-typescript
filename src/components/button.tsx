import React, { FC } from 'react';
import { Dimensions, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('screen');

interface Props {
    title: string;
    onPress: () => void;
}

const Button: FC<Props> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 10
    },
    text: {
        color: '#fff'
    }
})