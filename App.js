import { Keyboard, StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Task from './components/Task';
import React, { useState } from 'react';


export default function App() {

  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <Text>You can touch a task to erase it.</Text>

        {/* Items Container */}
        <ScrollView style={styles.items}>
          {
            taskItems.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item}/>
              </TouchableOpacity>  
            ))
          }
        </ScrollView>

      </View>

      {/* Inputs and buttons */}
      <KeyboardAvoidingView
        behavior='height'
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} value={task} placeholder='Write a task' onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 20,
    marginBottom: 140,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    padding: 15,
    width: 290,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 20
  },
});
