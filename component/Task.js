import {StatusBar} from 'expo-status-bar';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
       
        <View style={styles.item}>
        <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 23,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',


    },
    square: {
        width: 20,
        height: 17,
        backgroundColor: '#e1ad01',
        opacity: 0.4,
        borderRadius: 3,
        marginRight: 8,

    },
    itemText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
})

export default Task;