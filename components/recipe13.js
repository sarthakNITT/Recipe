import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { initialIngredients, recipes } from './data';
import Aloomasala from './aloomasala'
import Palakpaneer from './palakpaneer'

export default function Recipe({navigation}) {
  
  const navigationback = useNavigation();
  const recipeToShow = recipes.filter(recipe => recipe.id === 1 || recipe.id === 3);

  const navigateToScreen = (id) => {
    if (id === 1) {
      navigation.navigate('AlooMasala'); 
    } else if (id === 4) {
      navigation.navigate('MixVeg'); 
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity activeOpacity={1} onPress={() => navigationback.goBack()}>
            <MaterialIcons style={styles.headerContentIcon} name='arrow-back' size={20} color='#5FB78F'/>
          </TouchableOpacity>
          <View style={styles.headerContentText}>
            <MaterialIcons style={styles.headerContentHeadingblack} name='dining' size={22} color='#90BF34'/>
            <Text style={styles.headerContentHeadingblack}>Recipe</Text>
          </View>
          <TouchableOpacity activeOpacity={1}>
            <MaterialIcons style={styles.headerContentIcon}name='add' size={20} color='#5FB78F'/>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.content}>
        <FlatList
          data={recipeToShow}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (   
            <View style={styles.mainListContent}>  
              <TouchableOpacity style={styles.mainListContentbox} onPress={() => navigateToScreen(item.id)}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={styles.imageBackground}
                  imageStyle={styles.imageBackgroundStyle}
                />
                <View style={styles.mainLlistTextContent}>
                  <Text style={styles.mainListItemtext}>{item.iname}</Text>       
                  <View style={styles.mainListItemRating}>
                    <View style={styles.mainListItemRatingbox}>
                      <AntDesign name='star' size={17} color='#90BF34' />
                      <Text style={styles.mainListItemRatingTextLive}>{item.rating}</Text>
                    </View>
                    <View style={styles.mainListItemRatingbox}>
                      <MaterialIcons name='local-fire-department' size={17} color='grey' />
                      <Text style={styles.mainListItemRatingText}>{item.calorie}</Text>
                    </View>
                    <View style={styles.mainListItemRatingbox}>
                      <MaterialCommunityIcons name='clock-time-three' size={17} color='grey' />
                      <Text style={styles.mainListItemRatingText}>{item.time}</Text>
                    </View>
                  </View>
                  <View style={styles.mainListItemLevel}>
                    <Text style={styles.mainListItemLevelText}>{item.level}</Text>
                  </View>
                  <Text style={styles.mainListContentboxIngredients}>Ingredients Used</Text>
                  <Text style={styles.mainListContentboxIngredientsBox}>{item.ingredients}</Text>
                  <Text style={styles.mainListContentboxFavouritesBox}>{item.favoriteadd}</Text>
                  <Text style={styles.mainListContentboxprocedureBox}>{item.procedure}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <TouchableOpacity activeOpacity={1} style={styles.footerContentHome} onPress={() => navigation.navigate('Home')}>
            <MaterialCommunityIcons name='chef-hat' size={18} color='lightgrey'/>
            <Text style={styles.footerContentHomeText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={styles.footerContentHome} onPress={() => navigation.navigate('Ingredients')}>
            <FontAwesome name='shopping-basket' size={18} color='lightgrey'/>
            <Text style={styles.footerContentHomeText}>Ingredients</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={styles.footerContentHome} onPress={() => navigation.navigate('Recipe')}>
            <MaterialIcons name='dining' size={18} color='#90BF34'/>
            <Text style={styles.footerContentHomeLiveText}>All Recipe</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={styles.footerContentHome} onPress={() => navigation.navigate('SignUp')}>
            <MaterialCommunityIcons name='account' size={18} color='lightgrey'/>
            <Text style={styles.footerContentHomeText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    paddingTop: 35,
    paddingBottom: 10,
  },
  headerContent:{
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContentText:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContentHeadingblack:{
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 3,
  },
  headerContentIcon:{
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#FFF',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: 1,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  content:{
    marginVertical:10,
    flex: 1, 
    paddingHorizontal: 20,
  },
  mainListContent: {
    marginBottom: 20,
    borderBottom: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowRadius: 3.84,
    elevation: 1,
    borderRadius: 10,
    marginBottom: 30,
  },
  mainListContentbox:{
    paddingHorizontal: 10,
  },
  imageBackground: {
    width: 300,
    height: 100,
    marginVertical: 10,
  },
  imageBackgroundStyle: {
    borderRadius: 10,
  },
  mainLlistTextContent:{
    marginBottom: 10,
  },
  mainListItemtext: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mainListItemRating: {
    flexDirection: 'row',
  },
  mainListItemRatingbox:{
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
  },
  mainListItemRatingTextLive:{
    paddingLeft: 2,
    fontSize: 14,
    fontWeight: '600',
  },
  mainListItemRatingText:{
    paddingLeft: 1,
    color: 'grey',
    fontSize: 14,
    fontWeight: '600',
  },
  mainListItemLevel:{
    marginVertical: 5,
    alignItems: 'flex-start',
  },
  mainListItemLevelText:{
    borderRadius: 20,
    backgroundColor: '#90BF34',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#FFF',
    fontWeight: '600',
  },
  mainListContentboxIngredients:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainListContentboxFavouritesBox:{
    paddingTop:10,
    fontWeight:'600',
    color: 'grey'
  },
  mainListContentboxprocedureBox:{
    paddingBottom:10,
    fontWeight:'600',
    color: 'grey'
  },
  footer:{
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderColor: 'lightgrey',
    backgroundColor: '#FFF',
  },
  footerContent:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerContentHome:{
    alignItems: 'center',
  },
  footerContentHomeLiveText:{
    fontSize: 12,
    fontWeight: '500',
  },
  footerContentHomeText:{
    color: 'grey',
    fontSize: 12,
  },
});
