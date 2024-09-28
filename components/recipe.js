import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, FlatList, Alert } from 'react-native';
import React,{useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { recipes } from './data';
import { useNavigation } from '@react-navigation/native';
import { favorites } from './data';

export default function Recipe({navigation}) {

  const navigationback = useNavigation();
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [showFilters, setShowFilters] = useState(false); 

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const navigateToProcedure = (id) => {
    if (id === 1) {
      navigation.navigate('AlooMasala');
    } else if (id === 2) {
      navigation.navigate('ChanaMasala');
    }
    else if (id === 3) {
      navigation.navigate('PalakPaneer');
    }
    else if (id === 4) {
      navigation.navigate('MixVeg');
    }
    else if (id === 5) {
      navigation.navigate('DalTadka');
    }
  };

  const addToFavorites = (item) => {
    if (!favorites.find(fav => fav.id === item.id)) {
      favorites.push(item); 
      Alert.alert(`${item.iname} added to Favorites`);
    } else {
      Alert.alert(`${item.iname} is already in Favorites`);
    }
  };

  const handleSort = (option) => {
    if (sortBy === option) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(option);
      setSortOrder('asc');
    }
  };

  const sortRecipes = (option) => {
    let sortedRecipes = [...recipes];
    switch (option) {
      case 'rating':
        sortedRecipes.sort((a, b) => (sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating));
        break;
      case 'level':
        sortedRecipes.sort((a, b) => (sortOrder === 'asc' ? a.level.localeCompare(b.level) : b.level.localeCompare(a.level)));
        break;
      case 'time':
        sortedRecipes.sort((a, b) => {
          let idOrder = '41352';
          return idOrder.indexOf(a.id.toString()) - idOrder.indexOf(b.id.toString());
        });
        break;
      case 'calorie':
        sortedRecipes.sort((a, b) => {
          let idOrder = '14523';
          return idOrder.indexOf(a.id.toString()) - idOrder.indexOf(b.id.toString());
        });
        break;
      default:
        break;
    }
    return sortedRecipes;
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
          <TouchableOpacity activeOpacity={1} onPress={() => navigationback.goBack()}>
            <MaterialIcons style={styles.headerContentIcon} name='arrow-back' size={20} color='#5FB78F'/>
          </TouchableOpacity>
          <View style={styles.headerContentText}>
            <MaterialIcons style={styles.headerContentHeadingblack} name='dining' size={22} color='#90BF34'/>
            <Text style={styles.headerContentHeadingblack}>Recipe</Text>
          </View>
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Favorite')}>
            <MaterialIcons style={styles.headerContentIcon} name='favorite' size={20} color='pink' onPress={() => navigation.navigate('Favorite')}/>
          </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <TouchableOpacity style={styles.filter} onPress={toggleFilters}>
          <Text style={styles.filterText}>Filter <FontAwesome name='sort-down' size={18}/></Text>
        </TouchableOpacity>

        {/* Conditionally render filter options */}
        {showFilters && (
          <View style={styles.filterOptions}>
            <TouchableOpacity style={styles.filterButton} onPress={() => handleSort('rating')}>
              <Text style={styles.filterButtonText}>Rating</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton} onPress={() => handleSort('level')}>
              <Text style={styles.filterButtonText}>Level</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton} onPress={() => handleSort('time')}>
              <Text style={styles.filterButtonText}>Time</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton} onPress={() => handleSort('calorie')}>
              <Text style={styles.filterButtonText}>Calorie</Text>
            </TouchableOpacity>
          </View>
        )}

        <FlatList
          data={sortBy ? sortRecipes(sortBy) : recipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.mainListContent}>
              <TouchableOpacity style={styles.mainListContentbox} onPress={() => navigateToProcedure(item.id)} onLongPress={() => addToFavorites(item)}>
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
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  content:{
    marginVertical: 10,
    flex: 1,
    paddingHorizontal: 20,
  },
  filter:{
    marginHorizontal: 10,
    alignItems: 'flex-start',
    marginTop: 5,
    marginBottom: 10,
  },
  filterText:{
    fontWeight: '500',
    color: '#FFF',
    backgroundColor: '#90BF34',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    flexDirection: 'row'
  },
  filterOptions:{
    marginTop: 10, 
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  filterButton:{
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#90BF34',
    marginBottom: 10,
    borderRadius: 20,
  },
  filterButtonText:{
    color: '#FFF',
    fontWeight: '500',
  },
  mainListContent:{
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowRadius: 3.84,
    elevation: 1,
    borderRadius: 10,
  },
  mainListContentbox:{
    paddingHorizontal: 10,
  },
  imageBackground:{
    width: 300,
    height: 100,
    marginVertical: 10,
  },
  imageBackgroundStyle:{
    borderRadius: 10,
  },
  mainLlistTextContent:{
    marginBottom: 10,
  },
  mainListItemtext:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mainListItemRating:{
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
  mainListContentboxIngredientsBox:{
    marginBottom: 5,
    color: 'grey',
  },
  mainListContentboxFavouritesBox:{
    paddingBottom: 5,
    fontWeight: '600',
    color: 'grey',
  },
  mainListContentboxprocedureBox:{
    paddingBottom: 10,
    fontWeight: '600',
    color: 'grey',
  },
  footer:{
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderColor: 'lightgrey',
    backgroundColor: '#FFF',
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
