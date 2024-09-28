import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function SignIn({ navigation }) {

    const navigationback = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./images/mixedveg.jpg')}>
        <TouchableOpacity style={styles.arrowbg} activeOpacity={1} onPress={() => navigationback.goBack()}>
          <MaterialIcons style={styles.headerContentIcon} name='arrow-back' size={20} color='#5FB78F'/>
        </TouchableOpacity>
        <View style={styles.whiteboxContainer}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
            <Text style={styles.WelcomeText}>Mixed Vegetable</Text>
            <Text style={styles.mainProcedureHead}>Preparation:</Text>
              <Text style={styles.mainProcedure}>Chop the tomatoes, onions, spinach, and potatoes. Cube the paneer and mince the garlic.</Text>
            <Text style={styles.mainProcedureHead}>Cook Potatoes:</Text>
              <Text style={styles.mainProcedure}>In a pot, boil the cubed potatoes until they are just tender. Drain and set aside.</Text>
            <Text style={styles.mainProcedureHead}>Sauté Paneer:</Text>
              <Text style={styles.mainProcedure}>Heat a little oil in a pan and lightly fry the paneer cubes until golden. Remove and set aside on paper towels to drain excess oil.</Text>
            <Text style={styles.mainProcedureHead}>Cook Vegetables:</Text>
              <Text style={styles.mainProcedure}>Heat 2 tablespoons of oil in a large pan over medium heat. Add cumin seeds and let them sizzle for a few seconds. Add finely chopped onions and sauté until golden brown. Add minced garlic and sauté for another minute.</Text>
            <Text style={styles.mainProcedureHead}>Add Tomatoes and Spices:</Text>
              <Text style={styles.mainProcedure}>Add the chopped tomatoes to the pan and cook until they turn soft and mushy. Add turmeric powder, red chili powder, and salt. Mix well and cook for a few minutes until the oil separates from the tomato mixture.</Text>
            <Text style={styles.mainProcedureHead}>Add Potatoes and Green Peas:</Text>
              <Text style={styles.mainProcedure}>Add the boiled potatoes and green peas to the pan. Stir to coat them with the tomato mixture. Add a little water if the mixture is too thick. Cover and cook for 5-7 minutes, allowing the peas and potatoes to absorb the flavors. Serve hot with naan, roti, or rice.</Text>
            <Text style={styles.mainProcedureHead}>Add Spinach:</Text>
              <Text style={styles.mainProcedure}>Add the chopped spinach to the pan. Stir and cook for 2-3 minutes until the spinach is wilted and well combined with the vegetables.</Text>
            <Text style={styles.mainProcedureHead}>Add Paneer:</Text>
              <Text style={styles.mainProcedure}>Gently fold in the fried paneer cubes. Add a little more water if needed to make a gravy-like consistency. Cover and simmer for 5 minutes.</Text>
            <Text style={styles.mainProcedureHead}>Finish with Garam Masala:</Text>
              <Text style={styles.mainProcedure}>Sprinkle garam masala over the curry and mix well. Cook for another minute.</Text>
            <Text style={styles.mainProcedureHead}>Garnish and Serve:</Text>
              <Text style={styles.mainProcedure}>Garnish with freshly chopped coriander leaves. Serve hot with rice, roti, or naan.</Text>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1, 
    paddingTop: 40,
  },
  arrowbg: {
    marginBottom: 25,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  headerContentIcon: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 50,
  },
  whiteboxContainer: {
    flex: 1, 
    borderRadius: 30,
    overflow: 'hidden', 
  },
  scrollView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  scrollViewContent: {
    padding: 20,
  },
  WelcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    paddingVertical: 20,
  },
  mainProcedure: {
    color: '#FFF',
    marginBottom: 10, 
  },
  mainProcedureHead: {
    color: '#FFF',
    paddingTop: 5,
    fontWeight: 'bold', 
  },
});