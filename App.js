import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView,FlatList } from 'react-native';

export default function App() {
  const [enteredGoal,setEnteredGoal]= useState('');
  const [courseGoals,setCourseGouals] = useState([]);


  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  };

  const addGoalHandler = () => {
    setCourseGouals(courseGoals => [...courseGoals,{id: Math.random().toString(), value : enteredGoal}])
  };

  return (
    <View style={styles.screen}>
    <View style={styles.inputContainer}>
      <TextInput 
      placeholder="course goal" 
      style={styles.input} 
      onChangeText={goalInputHandler} 
      value={enteredGoal} />
      <Button title='ADD' onPress={addGoalHandler} />
    </View>
    {/* scroolView is good for limited list items but coz performance problem if use in long list items. for long list must use flatlist
    <ScrollView>
  {courseGoals.map((goal) => <View key={goal} style={styles.listItems}><Text  >{goal}</Text></View>)}
    </ScrollView> */}

    {/* for infinit and long list use flatlist */}
    <FlatList 
    keyExtractor={(item,index) => item.id}
    data={courseGoals}
    renderItem={itemData => (
      <View style={styles.listItems}>
    <Text>{itemData.item.value}</Text>
      </View>
    )}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
        padding : 50
    },
    inputContainer:{
      flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center'
      },
  input: {
        width: '80%' ,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    listItems:{
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1,
    }
  
})

