import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function SignIn({ navigation }) {

    const navigationback = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./images/palakpaneer.jpg')}>
        <TouchableOpacity style={styles.arrowbg} activeOpacity={1} onPress={() => navigationback.goBack()}>
          <MaterialIcons style={styles.headerContentIcon} name='arrow-back' size={20} color='#5FB78F'/>
        </TouchableOpacity>
        <View style={styles.whiteboxContainer}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
            <Text style={styles.WelcomeText}>Palak Paneer</Text>
            <Text style={styles.mainProcedureHead}>Blanch the Spinach:</Text>
              <Text style={styles.mainProcedure}>Boil water in a large pot. Add the spinach leaves and blanch them for about 2-3 minutes until they wilt. Drain and immediately transfer the spinach to a bowl of ice-cold water to retain the green color. After a few minutes, drain the spinach again and blend it into a smooth puree. Set aside.</Text>
            <Text style={styles.mainProcedureHead}>Prepare the Paneer:</Text>
              <Text style={styles.mainProcedure}>Heat a tablespoon of oil or ghee in a pan over medium heat. Add the paneer cubes and fry them until they turn golden brown. Remove and set aside on a paper towel to drain excess oil.</Text>
            <Text style={styles.mainProcedureHead}>Make the Base Masala:</Text>
              <Text style={styles.mainProcedure}>In the same pan, add another tablespoon of oil or ghee. Add cumin seeds and let them splutter. Add the chopped onions and sauté until they turn golden brown. Add the garlic and green chilies (if using) and sauté for another minute.</Text>
            <Text style={styles.mainProcedureHead}>Cook the Tomatoes:</Text>
              <Text style={styles.mainProcedure}>Add the chopped tomatoes to the pan and cook until they turn soft and mushy. Add turmeric powder and mix well.</Text>
            <Text style={styles.mainProcedureHead}>Combine Spinach and Paneer:</Text>
              <Text style={styles.mainProcedure}>Add the spinach puree to the tomato-onion mixture and stir well. Cook for about 5 minutes, stirring occasionally, until the spinach is well combined with the masala. Add salt to taste and a pinch of garam masala. Add the fried paneer cubes and mix gently to coat them with the spinach mixture.</Text>
            <Text style={styles.mainProcedureHead}>Simmer and Serve:</Text>
              <Text style={styles.mainProcedure}>Cover and let it simmer on low heat for another 5 minutes. Turn off the heat and let it sit for a few minutes to allow the flavors to meld together. Serve hot with naan, roti, or rice.</Text>
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