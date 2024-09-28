import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { recipes } from './data';
import { useNavigation } from '@react-navigation/native';

export default function NoRecipe({navigation}) {
    const navigationback = useNavigation();
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
        <TouchableOpacity activeOpacity={1}>
          <MaterialIcons style={styles.headerContentIcon}name='add' size={20} color='#5FB78F'/>
        </TouchableOpacity>
    </View>
    
    <View style={styles.content}>
        <Text style={styles.ContentText}>No Recipe can be cooked using these ingredients</Text>
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

  )
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
        shadowOffset: 1,
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      content:{
        marginVertical:10,
        flex: 1, 
        paddingHorizontal: 20,
        alignItems:'center',
        justifyContent:'center'
      },
      ContentText:{
        fontSize:16
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