import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [showGoalsInputModal, setShowGoalsInputModal] = useState(false);
  const [goals, setGoals] = useState([]);

  function goalSubmitHandler(goalInput) {
    if (goalInput !== '') setGoals(oldGoals => [...oldGoals, { goal: goalInput, id: Math.ceil(Math.random() * 10000) }]);
  }

  function deleteGoalHandler(id) {
    let deletedList = goals.filter((item) => item.id !== id);
    setGoals(deletedList);
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={{marginBottom: 15}}>
        <Button title='Add Goals' color='#14213d' onPress={() => setShowGoalsInputModal(!showGoalsInputModal)} />
      </View>
      {showGoalsInputModal && <GoalInput visible={showGoalsInputModal} goalSubmitHandler={goalSubmitHandler} setShowGoalsInputModal={setShowGoalsInputModal} />}
      <FlatList
        style={styles.goalContainer}
        data={goals}
        keyExtractor={(item, ind) => ind}
        renderItem={(itemData) => <Goal  Item itemData={itemData} deleteGoalHandler={deleteGoalHandler} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: "#023047",
    paddingBottom: 15,
    marginBottom: 10,
  },
  inputField: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ffb703',
    borderRadius: 5,
    flex: 1,
    marginRight: 4
  },
  goalContainer: {
    flex: 4,
  },
  goalListTitleContainer: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 4,
    backgroundColor: '#ffb703',
  },
  goalListTitle: {
    color: '#023047'
  }
});
