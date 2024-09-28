import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity, FlatList, Alert, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { initialIngredients } from './data';
import { useNavigation } from '@react-navigation/native';

export default function List({navigation}) {

    const navigationback = useNavigation();

    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [ingredients, setIngredients] = useState(initialIngredients);
    const [deletedItem, setDeletedItem] = useState(null);
    const [undoTimeout, setUndoTimeout] = useState(null);
    const [selectedId1, setSelectedId1] = useState(false); 
    const [selectedId2, setSelectedId2] = useState(false);
    const [selectedId3, setSelectedId3] = useState(false); 
    const [selectedId4, setSelectedId4] = useState(false);
    const [selectedId5, setSelectedId5] = useState(false); 
    const [selectedId6, setSelectedId6] = useState(false);
    const [selectedId7, setSelectedId7] = useState(false); 
    const [selectedId8, setSelectedId8] = useState(false);
    const [selectedId9, setSelectedId9] = useState(false); 
    const [selectedId10, setSelectedId10] = useState(false); 

    const toggleSelection = (itemId, itemName) => {
        if (selectedIngredients.includes(itemName)) {
            setSelectedIngredients(selectedIngredients.filter(item => item !== itemName));
        } else {
            setSelectedIngredients([...selectedIngredients, itemName]);
        }
        if (itemId === 1) {
            setSelectedId1(!selectedId1);
        } else if (itemId === 2) {
            setSelectedId2(!selectedId2);
        }
        if (itemId === 3) {
            setSelectedId3(!selectedId3);
        } else if (itemId === 4) {
            setSelectedId4(!selectedId4);
        }
        if (itemId === 5) {
            setSelectedId5(!selectedId5);
        } else if (itemId === 6) {
            setSelectedId6(!selectedId6);
        }
        if (itemId === 7) {
            setSelectedId7(!selectedId7);
        } else if (itemId === 8) {
            setSelectedId8(!selectedId8);
        }
        if (itemId === 9) {
            setSelectedId9(!selectedId9);
        } else if (itemId === 10) {
            setSelectedId10(!selectedId10);
        }

    };

    const handleUndo = () => {
        if (deletedItem) {
            setIngredients([...ingredients, deletedItem]);
            setDeletedItem(null);
            clearTimeout(undoTimeout);
        }
    };

    const removeItem = (itemId, itemName) => {
        if (undoTimeout) {
            clearTimeout(undoTimeout);
        }
        const itemToRemove = ingredients.find(i => i.id === itemId);
        setDeletedItem(itemToRemove);
        setSelectedIngredients(selectedIngredients.filter(item => item !== itemName));
        setIngredients(ingredients.filter(item => item.id !== itemId));

        Alert.alert(
            'Item Deleted',
            `${itemName} has been removed.`,
            [
                {
                    text: 'Undo',
                    onPress: handleUndo
                },
                { text: 'OK' }
            ],
            { cancelable: false }
        );

        const timeout = setTimeout(() => {
            setDeletedItem(null);
        }, 5000);
        setUndoTimeout(timeout);
    };

    const navigateToRecipe = () => {
        if ((selectedId1 && selectedId2 && selectedId3)) {
            navigation.navigate('Recipe'); 
        } 
        if ((selectedId5 && selectedId4)) {
            navigation.navigate('RecipeThreeFour'); 
        } 
        if ((selectedId2 && selectedId3 && selectedId6 && selectedId7)) {
            navigation.navigate('RecipeOneFour'); 
        }
        if ((selectedId1 && selectedId2 && selectedId3 &&  selectedId8) ) {
            navigation.navigate('RecipeFive'); 
        }
        if ((selectedId1 && selectedId2 && selectedId3 &&  selectedId10) ) {
            navigation.navigate('RecipeTwo'); 
        }
        if ((selectedId1 && selectedId2 && selectedId3 &&  selectedId4 && selectedId5 && selectedId6 && selectedId7 && selectedId8 && selectedId9 && selectedId10)) {
            navigation.navigate('Recipe'); 
        }else {
            navigation.navigate('NoRecipe')
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
                            <FontAwesome style={styles.headerContentHeadingblack} name='shopping-basket' size={22} color='#90BF34'/>
                            <Text style={styles.headerContentHeadingblack}>Ingredients</Text>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Favorite')}>
                        <MaterialIcons style={styles.headerContentIcon} name='favorite' size={20} color='pink' onPress={() => navigation.navigate('Favorite')}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.contentbox}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttons} onPress={navigateToRecipe}>
                        <Text style={styles.buttonText}>{selectedIngredients.length} items Selected</Text>
                        <MaterialIcons style={styles.arrow} name='navigate-next' size={30} color='#FFF' />
                    </TouchableOpacity>
                </View>
                <FlatList
                    scrollEnabled={true}
                    data={ingredients}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[styles.item, selectedIngredients.includes(item.iname) && styles.itemSelected]}
                            onPress={() => toggleSelection(item.id, item.iname)}
                            activeOpacity={0.7}
                        >
                            <ImageBackground
                                source={item.backgroundImage}
                                style={styles.imageBackground}
                                imageStyle={styles.imageBackgroundStyle}
                            >
                                <View style={styles.itemContent}>
                                    <View style={styles.itemContentBox}>
                                        <Text style={styles.text}>{item.iname}</Text>  
                                    <View style={styles.mainListItemRating}>
                                            <View style={styles.mainListItemRatingbox}>
                                                <AntDesign name='star' size={13} color='#FFF' />
                                                <Text style={styles.mainListItemRatingTextLive}>{item.rating}</Text>
                                            </View>
                                            <View style={styles.mainListItemRatingbox}>
                                                <MaterialIcons name='local-fire-department' size={13} color='#FFF' />
                                                <Text style={styles.mainListItemRatingText}>{item.calorie}</Text>
                                            </View>
                                            <View style={styles.mainListItemRatingbox}>
                                                <MaterialCommunityIcons name='clock-time-three' size={13} color='#FFF' />
                                                <Text style={styles.mainListItemRatingText}>{item.time}</Text>
                                    </View>
                                    </View>
                                </View>
                                        <TouchableOpacity style={styles.deleteButton} onPress={() => removeItem(item.id, item.iname)}>
                                            <MaterialIcons name='delete' size={20} color='#FFF' />
                                        </TouchableOpacity>  
                                        {selectedIngredients.includes(item.iname) && (
                                            <View style={styles.circleButton}>
                                                <Text style={styles.checkmark} >✓</Text>
                                            </View>
                                        )}
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>

            <View style={styles.footer}>
                <TouchableOpacity activeOpacity={1} style={styles.footerContentHome} onPress={() => navigation.navigate('Home')}>
                    <MaterialCommunityIcons name='chef-hat' size={18} color='lightgrey'/>
                    <Text style={styles.footerContentHomeText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.footerContentHome} onPress={() => navigation.navigate('Ingredients')}>
                    <FontAwesome name='shopping-basket' size={18} color='#90BF34'/>
                    <Text style={styles.footerContentHomeLiveText}>Ingredients</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.footerContentHome} onPress={() => navigation.navigate('Recipe')}>
                    <MaterialIcons name='dining' size={18} color='lightgrey'/>
                    <Text style={styles.footerContentHomeText}>All Recipe</Text>
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
    container: {
        flex:1,
    },
    header:{
        position:'static',
        paddingTop:35,
        paddingBottom:5,
        paddingHorizontal:20,
    },
    headerContent:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    headerContentText:{
        alignItems:'center',
        flexDirection:'row',
    },
    headerContentHeadingblack:{
        fontSize:20,
        fontWeight:'bold',
        marginHorizontal:3
    },
    headerContentIcon:{
        padding:5,
        borderRadius:20,
        backgroundColor:'#FFF',
        elevation:10,
        shadowColor:'#000',
        shadowOffset: 1,
        shadowOpacity: 5,
        shadowRadius:5,
    },
    item: {
        backgroundColor: '#000',
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        elevation:5,
        borderWidth:0.1
    },
    itemSelected: {
        backgroundColor: '#D0F0C0'
    },
    imageBackgroundStyle: {
        borderRadius: 10,
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: 'rgba(75, 75, 75, 0.5)',
        borderRadius:10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        paddingLeft: 20,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    mainListItemRating: {
        flexDirection:'row',
        marginLeft:20
    },
    mainListItemRatingbox:{
        flexDirection:'row',
        alignItems: 'center',
        marginRight: 10,
        marginVertical:3
    },
    mainListItemRatingTextLive:{
        paddingLeft:2,
        fontSize: 12,
        color:'#FFF',
        fontWeight:'600'
    },
    mainListItemRatingText:{
        paddingLeft:1,
        color: '#FFF',
        fontSize: 12,
        fontWeight:'600'
    },
    circleButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    checkmark: {
        color: '#FFF',
        fontSize: 14,
    },
    deleteButton: {
        padding: 10,
        paddingVertical:33,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        paddingLeft: 10
    },
    buttonContainer: {
        paddingVertical:10,
        marginBottom:10
    },
    buttons: {
        flexDirection: 'row',
        backgroundColor: '#4CAF50',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '500',
        fontSize: 14,
        marginHorizontal: 20
    },
    arrow: {
        marginHorizontal: 10
    },
    contentbox:{
        marginTop:10,
        flex:1
    },
    footer:{
        justifyContent: 'flex-end',
        paddingVertical:10,
        borderTopWidth: 0.5,
        borderColor: 'lightgrey',
        justifyContent: 'flex-end',
        paddingHorizontal:20,
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    footerContentHome:{
        alignItems:'center'
    },
    footerContentHomeLiveText:{
        fontSize:12,
        fontWeight:'500'
    },
    footerContentHomeText:{
        color: 'grey',
        fontSize:12
    },
});
