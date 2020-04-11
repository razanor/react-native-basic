import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const App = () => {
  const [name, setName] = useState('shaun');
  const [age, setAge] = useState('30');

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)}
      />

      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 99'
        onChangeText={(val) => setAge(val)}
      />
      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default App;
