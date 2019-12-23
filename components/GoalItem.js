import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const GoalItems = props =>{
    return (
        <TouchableOpacity activeOpacity={.8} onPress={props.onDelete.bind(this,props.id)} >
    <View style={styles.listItems}>
    <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
      )
}
export default GoalItems

const styles = StyleSheet.create({
    listItems:{
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
      }
});