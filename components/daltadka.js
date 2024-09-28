import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function DalTadka({ navigation }) {

    const navigationback = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./images/daltadka.jpg')}>

        <TouchableOpacity style={styles.arrowbg} activeOpacity={1} onPress={() => navigationback.goBack()}>
          <MaterialIcons style={styles.headerContentIcon} name='arrow-back' size={20} color='#5FB78F'/>
        </TouchableOpacity>
        
        <View style={styles.whiteboxContainer}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
            <Text style={styles.WelcomeText}>Daal Tadka</Text>
            <Text style={styles.mainProcedureHead}>Prepare the Lentils:</Text>
              <Text style={styles.mainProcedure}>Rinse the lentils thoroughly under running water until the water runs clear. In a pot, add the lentils and 2 cups of water. Bring to a boil, then reduce the heat and simmer until the lentils are soft and cooked through. This usually takes about 15-20 minutes, depending on the type of lentils. You can also cook the lentils in a pressure cooker for about 2-3 whistles. Once the lentils are cooked, lightly mash them with a spoon for a creamy consistency. Set aside.</Text>
            <Text style={styles.mainProcedureHead}>Make the Tadka (Tempering):</Text>
              <Text style={styles.mainProcedure}>In a separate pan, heat the oil or ghee over medium heat. Add the cumin seeds and let them splutter. Add the chopped onions and green chilies (if using). Sauté until the onions become golden brown.</Text>
            <Text style={styles.mainProcedureHead}>Add the Garlic and Tomatoes:</Text>
              <Text style={styles.mainProcedure}>Add the minced garlic to the pan and sauté for a minute until fragrant. Add the chopped tomatoes and cook until they become soft and mushy, about 5 minutes.</Text>
            <Text style={styles.mainProcedureHead}>Add the Spices:</Text>
              <Text style={styles.mainProcedure}>Add the turmeric powder, cumin powder, coriander powder, and red chili powder. Cook for another 2 minutes, stirring well to mix the spices with the tomato and onion mixture.</Text>
            <Text style={styles.mainProcedureHead}>Combine with Lentils:</Text>
              <Text style={styles.mainProcedure}>Pour the cooked lentils into the pan with the onion-tomato mixture. Mix well. Add salt to taste. Bring the mixture to a gentle boil, then reduce the heat and simmer for 5-10 minutes to let the flavors meld together. Adjust the consistency by adding more water if necessary.</Text>
            <Text style={styles.mainProcedureHead}>Final Touch:</Text>
              <Text style={styles.mainProcedure}>Taste and adjust seasoning as needed. Garnish with fresh coriander leaves. </Text>
            <Text style={styles.mainProcedureHead}>Serve:</Text>
              <Text style={styles.mainProcedure}>Serve hot with rice, roti, or any bread of your choice.
            </Text>

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