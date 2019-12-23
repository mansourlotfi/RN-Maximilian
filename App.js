import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView,FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals,setCourseGouals] = useState([]);


  

  const addGoalHandler = goalTitle => {
    setCourseGouals(courseGoals => [...courseGoals,{id: Math.random().toString(), value : goalTitle}])
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
    
    {/* scroolView is good for limited list items but coz performance problem if use in long list items. for long list must use flatlist
    <ScrollView>
  {courseGoals.map((goal) => <View key={goal} style={styles.listItems}><Text  >{goal}</Text></View>)}
    </ScrollView> */}

    {/* for infinit and long list use flatlist */}
    <FlatList 
    keyExtractor={(item,index) => item.id}
    data={courseGoals}
    renderItem={itemData => ( <GoalItem title={itemData.item.value} />  
    )}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
        padding : 50
    },
    
    
  
})

