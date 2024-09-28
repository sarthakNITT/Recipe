import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import List from './components/ingredients'
import Newlog from './components/newlog';
import Newsign from './components/newsign'
import Home from './components/home';
import Recipe from './components/recipe';
import RecipeThreeFour from './components/recipe34'
import RecipeOneFour from './components/recipe14'
import RecipeOneThree from './components/recipe13'
import RecipeFive from './components/recipe5'
import RecipeTwo from './components/recipe2'
import AlooMasala from './components/aloomasala'
import ChanaMasala from './components/chanamasala'
import PalakPaneer from './components/palakpaneer'
import DalTadka from './components/daltadka'
import MixVeg from './components/mixedveg'
import Favorite from './components/favorite'
import NoRecipe from './components/NoRecipe';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Home navigation={navigation} />
    </>
  );
};

export default function App() {

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false, }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SignUp" component={Newsign} />
            <Stack.Screen name="LogIn" component={Newlog} />
            <Stack.Screen name="Ingredients" component={List} />
            <Stack.Screen name="Recipe" component={Recipe} />
            <Stack.Screen name="RecipeThreeFour" component={RecipeThreeFour} />
            <Stack.Screen name="RecipeOneFour" component={RecipeOneFour} />
            <Stack.Screen name="RecipeOneThree" component={RecipeOneThree} />
            <Stack.Screen name="RecipeTwo" component={RecipeTwo} />
            <Stack.Screen name="RecipeFive" component={RecipeFive} />
            <Stack.Screen name="AlooMasala" component={AlooMasala} />
            <Stack.Screen name="ChanaMasala" component={ChanaMasala} />
            <Stack.Screen name="PalakPaneer" component={PalakPaneer} />
            <Stack.Screen name="DalTadka" component={DalTadka} />
            <Stack.Screen name="MixVeg" component={MixVeg} />
            <Stack.Screen name="Favorite" component={Favorite} />
            <Stack.Screen name="NoRecipe" component={NoRecipe} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})