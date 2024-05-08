import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';

export default function App() {
  const [enteredgoaltext , setenteredGoalText] = useState( ' ');
  function goalInputHandler(enteredText) {
    // console.log("The entered text is " + enteredText);
    setenteredGoalText(enteredText);
    
  }
  function addgoalhandler() {}
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your course goal!' onChangeText={goalInputHandler}/>
        <Button title="Add Goal "  onPress={addgoalhandler}/>
        
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goal ... </Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,

    paddingTop:50,
    paddingHorizontal: 16,


  },
  inputContainer:{
    flex:1,
    flexDirection :'row',
    justifyContent: "space-between",
    alignItems:"center",
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#c8ced3',

  },
  textInput:{
    borderWidth:1,
    borderColor: "#cccccc",
    width:"70%",
    marginRight:8,
    padding: 8,

  },
  goalsContainer:{
    flex:5,

  },

});
