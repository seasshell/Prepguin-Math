import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

interface SelectLevelProps {
  area?: string;   
}

const SelectLevel: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  let { area } = route.params && route.params as { area: string } // Extract the area parameter
  if (!area)
    area='Algebra'

  const handlePress = (level: string) => {
    navigation.navigate('ProblemScreen', { level: level, area: area });
  };

  const levels = ['Easy', 'Medium', 'Hard'];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{area}</Text>
      <View style={styles.buttonsContainer}>
        {levels.map((item, index) => (
          <View key={index} style={styles.buttonWrapper}>
            <Button title={item} onPress={() => handlePress(item)} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40, // Increase text size
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginVertical: 10,
    width: 150, // Increase button width
    height: 60, // Increase button height
  },
});

export default SelectLevel;
