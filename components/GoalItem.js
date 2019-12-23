import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const GoalItems = props =>{
    return (
    <View style={styles.listItems}>
    <Text>{props.title}</Text>
    </View>
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