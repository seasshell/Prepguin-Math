import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, ToastAndroid } from 'react-native';
import problemsData from './MathAppProbs.json';
import { useRoute } from '@react-navigation/native';


const ProblemScreen = () => {
  const [hardGeometryProblems, setHardGeometryProblems] = useState([]);
  const [selectedProblemIndex, setSelectedProblemIndex] = useState(null); // State to track the selected problem
  const route = useRoute();
  const { area,level } = route.params as { area: string, level:string }; // Extract the area parameter
 


  useEffect(() => {
    console.log(area, level);
    // Filter problems based on category and difficulty
    const filteredProblems = problemsData.filter(problem =>
      problem.Category === area && problem.Difficulty === level
    );

    // Update the state with the filtered problems
    setHardGeometryProblems(filteredProblems);
  }, [area,level]);

  const ansCheck = (choice, answer) => {
    if (choice === answer) {
      ToastAndroid.show("Correct", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Incorrect", ToastAndroid.SHORT);
    }
  };

  const handleShowExplanation = (index) => {
    setSelectedProblemIndex(index === selectedProblemIndex ? null : index);
  };

  return ( 
    <ScrollView> 
      <View style={styles.container}>
        <Text style={styles.title}>{level} {area} Problems</Text>
        {hardGeometryProblems.map((problem, index) => {
          // Convert individual choice fields into an array
          const choices = [
            problem.ChoiceA,
            problem.ChoiceB,
            problem.ChoiceC,
            problem.ChoiceD,
            problem.ChoiceE
          ];
 
          return (
            <View key={index} style={styles.problemContainer}>
              <Text style={styles.question}>{problem.Question}</Text>
              {choices.map((choice, idx) => (
                <View key={idx} style={{ marginBottom: 10, width: 100 }}>
                  <Button title={choice} onPress={() => ansCheck(choice, problem.Answer)} />
                </View>
              ))}
              <Button
                title="Show Explanation"
                onPress={() => handleShowExplanation(index)}
              />
              {selectedProblemIndex === index && (
                <Text style={styles.explanation}>{problem.Explanation}</Text>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  problemContainer: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightyellow',
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
  },
  explanation: {
    marginTop: 10,
    fontSize: 14,
    color: 'gray',
  },
});

export default ProblemScreen;
