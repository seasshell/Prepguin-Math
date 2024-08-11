import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import problemsData from './(tabs)/MathAppProbs.json';
import { useRoute } from '@react-navigation/native';

const ProblemScreen = () => {
  const [Problems, setProblems] = useState([]);
  const [selectedProblemIndex, setSelectedProblemIndex] = useState(null); // State to track the selected problem
  const [selectedChoice, setSelectedChoice] = useState(null); 
  const route = useRoute();
  const { area, level } = route.params as { area: string, level: string }; // Extract the area parameter

  useEffect(() => {
    console.log(area, level);
    // Filter problems based on category and difficulty
    const filteredProblems = problemsData.filter(problem =>
      problem.Category === area && problem.Difficulty === level
    );

    setProblems(filteredProblems);
  }, [area, level]);

  const ansCheck = (choice, answer, index) => {
    const isCorrect = choice === answer;
    setSelectedChoice({ choice, isCorrect, problemIndex: index });
  };

  const handleShowExplanation = (index) => {
    setSelectedProblemIndex(index === selectedProblemIndex ? null : index);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{level} {area} Problems</Text>
        {Problems.map((problem, index) => {
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
              <View style={styles.choicesContainer}>
                <View style={styles.row}>
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      selectedChoice && selectedChoice.problemIndex === index && selectedChoice.choice === problem.ChoiceA
                        ? (selectedChoice.isCorrect ? styles.correctButton : styles.incorrectButton)
                        : {}
                    ]}
                    onPress={() => ansCheck(problem.ChoiceA, problem.Answer, index)}
                  >
                    <Text style={styles.buttonText}>{`${problem.ChoiceA} ${selectedChoice && selectedChoice.problemIndex === index && selectedChoice.choice === problem.ChoiceA ? (selectedChoice.isCorrect ? "Correct!" : "Incorrect") : ""}`}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      selectedChoice && selectedChoice.problemIndex === index && selectedChoice.choice === problem.ChoiceB
                        ? (selectedChoice.isCorrect ? styles.correctButton : styles.incorrectButton)
                        : {}
                    ]}
                    onPress={() => ansCheck(problem.ChoiceB, problem.Answer, index)}
                  >
                    <Text style={styles.buttonText}>{`${problem.ChoiceB} ${selectedChoice && selectedChoice.problemIndex === index && selectedChoice.choice === problem.ChoiceB ? (selectedChoice.isCorrect ? "Correct!" : "Incorrect") : ""}`}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      selectedChoice && selectedChoice.problemIndex === index && selectedChoice.choice === problem.ChoiceC
                        ? (selectedChoice.isCorrect ? styles.correctButton : styles.incorrectButton)
                        : {}
                    ]}
                    onPress={() => ansCheck(problem.ChoiceC, problem.Answer, index)}
                  >
                    <Text style={styles.buttonText}>{`${problem.ChoiceC} ${selectedChoice && selectedChoice.problemIndex === index && selectedChoice.choice === problem.ChoiceC ? (selectedChoice.isCorrect ? "Correct!" : "Incorrect") : ""}`}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      selectedChoice && selectedChoice.problemIndex === index && selectedChoice.choice === problem.ChoiceD
                        ? (selectedChoice.isCorrect ? styles.correctButton : styles.incorrectButton)
                        : {}
                    ]}
                    onPress={() => ansCheck(problem.ChoiceD, problem.Answer, index)}
                  >
                    <Text style={styles.buttonText}>{`${problem.ChoiceD} ${selectedChoice && selectedChoice.problemIndex === index && selectedChoice.choice === problem.ChoiceD ? (selectedChoice.isCorrect ? "Correct!" : "Incorrect") : ""}`}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      selectedChoice && selectedChoice.problemIndex === index && selectedChoice.choice === problem.ChoiceE
                        ? (selectedChoice.isCorrect ? styles.correctButton : styles.incorrectButton)
                        : {}
                    ]}
                    onPress={() => ansCheck(problem.ChoiceE, problem.Answer, index)}
                  >
                    <Text style={styles.buttonText}>{`${problem.ChoiceE} ${selectedChoice && selectedChoice.problemIndex === index && selectedChoice.choice === problem.ChoiceE ? (selectedChoice.isCorrect ? "Correct!" : "Incorrect") : ""}`}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={styles.explanationButton}
                onPress={() => handleShowExplanation(index)}
              >
                <Text style={styles.buttonText}>Show Explanation</Text>
              </TouchableOpacity>
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
  choicesContainer: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  choiceButton: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  correctButton: {
    backgroundColor: 'green',
  },
  incorrectButton: {
    backgroundColor: 'red',
  },
  explanationButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  explanation: {
    marginTop: 10,
    fontSize: 14,
    color: 'gray',
  },
});

export default ProblemScreen;
