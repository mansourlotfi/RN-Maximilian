import React, {useState} from 'react';
import { StyleSheet, View,Button,FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [currentGoals,setCourseGouals] = useState([]);
  const [isAddMod,setIsAddMod] = useState('false')



  

  const addGoalHandler = goalTitle => {
    setCourseGouals(currentGoals => [...currentGoals,{id: Math.random().toString(), value : goalTitle}])
    setIsAddMod(false)
  };
  const removeGoalHandler = goalId => {
    setCourseGouals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    }) 
  }
  const cancelGoalAditionHandler = () => {
    setIsAddMod(false)
  }

  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={() => setIsAddMod(true)} />
      <GoalInput visible={isAddMod} onAddGoal={addGoalHandler} onCancel={cancelGoalAditionHandler} />
    
    {/* scroolView is good for limited list items but coz performance problem if use in long list items. for long list must use flatlist
    <ScrollView>
  {courseGoals.map((goal) => <View key={goal} style={styles.listItems}><Text  >{goal}</Text></View>)}
    </ScrollView> */}

    {/* for infinit and long list use flatlist */}
    <FlatList 
    keyExtractor={(item,index) => item.id}
    data={currentGoals}
    renderItem={itemData => ( <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />  
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

