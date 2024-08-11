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
    
    navigation.navigate('ProblemScreen',{level:level,area:area});
   
  };
const levels=['Easy','Medium','Hard'];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{area}</Text>
      <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
    {
      levels.map((item, index) =>(
      <View key={index}  style={{padding:10,  width:100}}><Button  title={item} onPress={() => handlePress(item)} /></View>))
    }
      
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
    fontSize: 20,
    marginBottom: 20,
  },
});

export default SelectLevel;
