import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SelectLevel from '../SelectLevel';
import ProblemScreen from '../ProblemScreen';

const Stack = createStackNavigator();

const CustomButton: React.FC<{ title: string; onPress: () => void }> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const onPressHandler = (title: string) => {
    console.log(`${title} pressed`);
    // Handle onPress logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Algebra"
          onPress={() => navigation.navigate('SelectLevel',{area:"Algebra"})}
        />
        <CustomButton
          title="Geometry"
          onPress={() => navigation.navigate('SelectLevel',{area:"Geometry"})}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Combination"
          onPress={() => navigation.navigate('SelectLevel',{area:"Combination"})}
        />
        <CustomButton
          title="Number Sense"
          onPress={() => navigation.navigate('SelectLevel',{area:"Number Sense"})}
        />
      </View>
    </ScrollView>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        
        <Stack.Screen name="SelectLevel" component={SelectLevel} />
        <Stack.Screen name="ProblemScreen" component={ProblemScreen}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the buttons horizontally
    marginVertical: 10,
  },
  customButton: {
    backgroundColor: 'blue',
    //paddingVertical: 20,
    //paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 10, // Add space between buttons
    height: 130,
    width: 170,
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  touchable: {
    height: 150,
    width: 200,
    borderRadius: 10,
    marginVertical: 10, // Adjust margin as needed
    backgroundColor: 'red',
    borderWidth: 1,
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
