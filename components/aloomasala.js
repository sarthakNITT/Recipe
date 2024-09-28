import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function AlooMasala({ navigation }) {

    const navigationback = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./images/aloomasala.jpg')}>

        <TouchableOpacity style={styles.arrowbg} activeOpacity={1} onPress={() => navigationback.goBack()}>
          <MaterialIcons style={styles.headerContentIcon} name='arrow-back' size={20} color='#5FB78F'/>
        </TouchableOpacity>

        <View style={styles.whiteboxContainer}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
            <Text style={styles.WelcomeText}>Aloo Masala</Text>
            <Text style={styles.mainProcedureHead}>Prepare Potatoes:</Text>
              <Text style={styles.mainProcedure}>Peel and dice the potatoes into small cubes. Rinse them in cold water to remove excess starch.</Text>
            <Text style={styles.mainProcedureHead}>Heat Oil:</Text>
              <Text style={styles.mainProcedure}>Heat vegetable oil in a pan over medium heat.</Text>
            <Text style={styles.mainProcedureHead}>Tempering:</Text>
              <Text style={styles.mainProcedure}>Add cumin seeds to the hot oil. Let them splutter for a few seconds.</Text>
            <Text style={styles.mainProcedureHead}>Saute Aromatics:</Text>
              <Text style={styles.mainProcedure}>Add minced garlic and sauté for a minute until fragrant.</Text>
            <Text style={styles.mainProcedureHead}>Add Onions:</Text>
              <Text style={styles.mainProcedure}>Add finely chopped onions to the pan. Sauté until onions turn translucent and light golden brown.</Text>
            <Text style={styles.mainProcedureHead}>Add Tomatoes:</Text>
              <Text style={styles.mainProcedure}>Add chopped tomatoes to the pan. Cook until tomatoes are softened and oil starts to separate from the mixture.</Text>
              <Text style={styles.mainProcedure}>Reduce the heat to medium-low. Add turmeric powder, red chili powder, coriander powder, and salt. Mix well and cook for a minute.</Text>
            <Text style={styles.mainProcedureHead}>Cook Potatoes:</Text>
              <Text style={styles.mainProcedure}>Add the diced potatoes and green peas to the pan. Stir well to coat them with the spice mixture.</Text>
            <Text style={styles.mainProcedureHead}>Simmer:</Text>
              <Text style={styles.mainProcedure}>Add a little water (about 1/4 to 1/2 cup) to help cook the potatoes. Cover the pan with a lid and simmer on medium-low heat. Stir occasionally to ensure even cooking. Cook until potatoes are tender and cooked through, about 10-12 minutes.</Text>
            <Text style={styles.mainProcedureHead}>Finish with Garam Masala:</Text>
              <Text style={styles.mainProcedure}>Once potatoes are cooked, sprinkle garam masala powder over the dish. Mix gently to incorporate.</Text>
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
