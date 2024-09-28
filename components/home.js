import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { initialIngredients, recipes } from './data';

export default function Home({ navigation }) {
    const ingredientsToShow = initialIngredients.filter(ingredient => [1, 2, 3, 9].includes(ingredient.id));
    const recipeToShow = recipes.filter(recipe => [1, 2, 3].includes(recipe.id));

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContentText}>
                    <View style={styles.headerContentHeadingText}>
                        <Text style={styles.headerContentHeadingGreen}>SPIDER</Text>
                        <Text style={styles.headerContentHeadingblack}>TASK1</Text>
                    </View>
                    <Text style={styles.headerContentSubHeadingText}>APPLICATION DEVELOPMENT</Text>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Favorite')}>
                    <MaterialIcons style={styles.headerContentIcon} name='favorite' size={20} color='pink' />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollheight}>

            <View style={styles.body}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.bodyBox}>
                            <Image style={styles.bodyBackground} source={require('./images/bgcontent2.png')} />
                        </View>
                        <View style={styles.bodyBox}>
                            <Image style={styles.bodyBackground} source={require('./images/bgcontent1.png')} />
                        </View>
                        <View style={styles.bodyBox}>
                            <Image style={styles.bodyBackground} source={require('./images/bgcontent.png')} />
                        </View>
                </ScrollView>
            </View>

            <View style={styles.main}>
                <View style={styles.mainHeadingBox}>
                    <Text style={styles.mainHeading}>Top Ingredients</Text>
                    <TouchableOpacity style={styles.mainHeadingBoxButton} activeOpacity={1} onPress={() => navigation.navigate('Ingredients')}>
                        <Text style={styles.mainHeadingBoxButtonText}>View All</Text>
                    </TouchableOpacity>
                </View>
                {ingredientsToShow.map(item => (
                    <View key={item.id} style={styles.mainListContent}>
                        <TouchableOpacity style={styles.mainListContentbox}>
                            <ImageBackground
                                source={item.backgroundImage}
                                style={styles.imageBackground}
                                imageStyle={styles.imageBackgroundStyle}
                            />
                            <View style={styles.mainLlistTextContent}>
                                <Text style={styles.mainListItemtext}>{item.iname}</Text>
                                <View style={styles.mainListItemRating}>
                                    <View style={styles.mainListItemRatingbox}>
                                        <AntDesign name='star' size={13} color='#90BF34' />
                                        <Text style={styles.mainListItemRatingTextLive}>{item.rating}</Text>
                                    </View>
                                    <View style={styles.mainListItemRatingbox}>
                                        <MaterialIcons name='local-fire-department' size={13} color='grey' />
                                        <Text style={styles.mainListItemRatingText}>{item.calorie}</Text>
                                    </View>
                                    <View style={styles.mainListItemRatingbox}>
                                        <MaterialCommunityIcons name='clock-time-three' size={13} color='grey' />
                                        <Text style={styles.mainListItemRatingText}>{item.time}</Text>
                                    </View>
                                </View>
                                <View style={styles.mainListItemLevel}>
                                    <Text style={styles.mainListItemLevelText}>{item.level}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}

                <View style={styles.mainList}>
                    <View style={styles.mainHeadingBox}>
                        <Text style={styles.mainHeading}>Top Recipe</Text>
                        <TouchableOpacity style={styles.mainHeadingBoxButton} activeOpacity={1} onPress={() => navigation.navigate('Recipe')}>
                            <Text style={styles.mainHeadingBoxButtonText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    {recipeToShow.map(item => (
                        <View key={item.id} style={styles.mainListContent}>
                            <TouchableOpacity style={styles.mainListContentbox}>
                                <ImageBackground
                                    source={item.backgroundImage}
                                    style={styles.imageBackground}
                                    imageStyle={styles.imageBackgroundStyle}
                                />
                                <View style={styles.mainLlistTextContent}>
                                    <Text style={styles.mainListItemtext}>{item.iname}</Text>
                                    <View style={styles.mainListItemRating}>
                                        <View style={styles.mainListItemRatingbox}>
                                            <AntDesign name='star' size={13} color='#90BF34' />
                                            <Text style={styles.mainListItemRatingTextLive}>{item.rating}</Text>
                                        </View>
                                        <View style={styles.mainListItemRatingbox}>
                                            <MaterialIcons name='local-fire-department' size={13} color='grey' />
                                            <Text style={styles.mainListItemRatingText}>{item.calorie}</Text>
                                        </View>
                                        <View style={styles.mainListItemRatingbox}>
                                            <MaterialCommunityIcons name='clock-time-three' size={13} color='grey' />
                                            <Text style={styles.mainListItemRatingText}>{item.time}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.mainListItemLevel}>
                                        <Text style={styles.mainListItemLevelText}>{item.level}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>

            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity activeOpacity={1} style={styles.footerContentHome}>
                    <MaterialCommunityIcons name='chef-hat' size={18} color='#90BF34' />
                    <Text style={styles.footerContentHomeLiveText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.footerContentHome} onPress={() => navigation.navigate('Ingredients')}>
                    <FontAwesome name='shopping-basket' size={18} color='lightgrey' />
                    <Text style={styles.footerContentHomeText}>Ingredients</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.footerContentHome} onPress={() => navigation.navigate('Recipe')}>
                    <MaterialIcons name='dining' size={18} color='lightgrey' />
                    <Text style={styles.footerContentHomeText}>All Recipe</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.footerContentHome} onPress={() => navigation.navigate('SignUp')}>
                    <MaterialCommunityIcons name='account' size={18} color='lightgrey' />
                    <Text style={styles.footerContentHomeText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 35,
        paddingBottom: 10,
        elevation: 2,
        borderBottomWidth: 0.1,
        borderBottomColor: 'lightgrey',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerContentHeadingText: {
        flexDirection: 'row'
    },
    headerContentHeadingGreen: {
        color: '#90BF34',
        fontWeight: 'bold',
        fontSize: 20
    },
    headerContentHeadingblack: {
        fontSize: 20
    },
    headerContentSubHeadingText: {
        fontSize: 9
    },
    headerContentIcon: {
        padding: 5,
        borderRadius: 20,
        backgroundColor: '#FFF',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    body: {
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 20
    },
    bodyBox: {
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden'
    },
    bodyBackground: {
        width: 250,
        height: 120,
    },
    main: {
        paddingHorizontal: 20,
    },
    mainHeadingBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        paddingHorizontal: 10
    },
    mainHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    mainHeadingBoxButtonText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#90BF34',
        borderRadius: 20,
        color: '#FFF',
        fontWeight: '600'
    },
    mainListContent: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowRadius: 3.84,
        elevation: 1,
        borderRadius: 10
    },
    mainListContentbox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    imageBackground: {
        width: 100,
        height: 100,
    },
    imageBackgroundStyle: {
        borderRadius: 10
    },
    mainLlistTextContent: {
        paddingHorizontal: 10
    },
    mainListItemtext: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 3
    },
    mainListItemRating: {
        flexDirection: 'row',
    },
    mainListItemRatingbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        marginVertical: 3
    },
    mainListItemRatingTextLive: {
        paddingLeft: 2,
        fontSize: 12,
        fontWeight: '600'
    },
    mainListItemRatingText: {
        paddingLeft: 1,
        color: 'grey',
        fontSize: 12,
        fontWeight: '600'
    },
    mainListItemLevel: {
        marginVertical: 5,
        alignItems: 'flex-start'
    },
    mainListItemLevelText: {
        borderRadius: 20,
        backgroundColor: '#90BF34',
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#FFF',
        fontWeight: '600'
    },
    footer: {
        borderTopWidth: 0.5,
        borderColor: 'lightgrey',
        justifyContent: 'flex-end',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    footerContentHome: {
        alignItems: 'center'
    },
    footerContentHomeLiveText: {
        fontSize: 12,
        fontWeight: '500'
    },
    footerContentHomeText: {
        color: 'grey',
        fontSize: 12,
        fontWeight: '500'
    },
});
