import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function ChanaMasala({ navigation }) {

    const navigationback = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./images/chanamasala.jpg')}>

        <TouchableOpacity style={styles.arrowbg} activeOpacity={1} onPress={() => navigationback.goBack()}>
          <MaterialIcons style={styles.headerContentIcon} name='arrow-back' size={20} color='#5FB78F'/>
        </TouchableOpacity>

        <View style={styles.whiteboxContainer}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
            <Text style={styles.WelcomeText}>Chana Masala</Text>
            <Text style={styles.mainProcedureHead}>Preparation:</Text>
              <Text style={styles.mainProcedure}>If using dried chickpeas, soak them overnight and cook them until tender. Canned chickpeas can be used directly after draining and rinsing. Chop the tomatoes and onions, and mince the garlic (and ginger, if using).</Text>
            <Text style={styles.mainProcedureHead}>Cooking the Base:</Text>
              <Text style={styles.mainProcedure}>Heat oil in a large pan or skillet over medium heat. Add the cumin seeds and let them sizzle for a few seconds until fragrant. Add the finely chopped onions and cook until they become golden brown. Add the minced garlic (and ginger, if using) and sauté for another minute until the raw smell goes away.</Text>
            <Text style={styles.mainProcedureHead}>Making the Masala:</Text>
              <Text style={styles.mainProcedure}>Add the chopped tomatoes and cook until they become soft and the oil starts to separate from the masala. This usually takes about 5-7 minutes. Stir in the turmeric powder, coriander powder, cumin powder, red chili powder, and chana masala powder (if using). Cook the spices for a minute or two, ensuring they are well incorporated into the tomato mixture.</Text>
            <Text style={styles.mainProcedureHead}>Adding Chickpeas:</Text>
              <Text style={styles.mainProcedure}>Add the cooked chickpeas to the pan and mix well to coat them with the masala. Pour in about 1 cup of water to create a gravy. You can adjust the amount of water based on the consistency you prefer.</Text>
            <Text style={styles.mainProcedureHead}>Simmering:</Text>
              <Text style={styles.mainProcedure}>Bring the mixture to a boil, then reduce the heat to low and let it simmer for about 10-15 minutes. This allows the chickpeas to absorb the flavors of the spices. Stir occasionally to prevent sticking and add more water if needed to keep the desired consistency.</Text>
            <Text style={styles.mainProcedureHead}>Finishing Touches:</Text>
              <Text style={styles.mainProcedure}>Add salt to taste and mix well. Stir in the garam masala and let it cook for another 2 minutes. If desired, add a splash of lemon juice for a tangy finish.</Text>
            <Text style={styles.mainProcedureHead}>Serving:</Text>
              <Text style={styles.mainProcedure}>Garnish with fresh coriander leaves. Serve hot with rice, naan, or any Indian bread of your choice.</Text>
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
