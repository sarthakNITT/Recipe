import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            const userData = await AsyncStorage.getItem(email);
            if (userData !== null) {
                const savedUser = JSON.parse(userData);
                if (savedUser.password === password) {
                    Alert.alert('Welcome Back!', 'Logged in successfully.');
                    navigation.navigate('Home'); 
                } else {
                    Alert.alert('Incorrect Password', 'Please enter correct password.');
                }
            } else {
                Alert.alert('Account Not Found', "You don't have an account. Please sign up first.");
            }
        } catch (error) {
            Alert.alert('Error', 'Error while signing in. Please try again later.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.background} source={require('./images/background.png')}>
                <View style={styles.full}>
                    <Text style={styles.signin}>Log In</Text>
                    <View style={styles.whitebox}>
                        <View style={styles.whiteboxContent}>
                            <Text style={styles.WelcomeText}>Welcome Back!</Text>
                            <Text style={styles.subText}>To keep connected with us please login with your personal info</Text>
                            <TextInput
                                style={styles.email}
                                onChangeText={setEmail}
                                value={email}
                                keyboardType='email-address'
                                placeholder='Email Address'
                            />
                            <TextInput
                                style={styles.password}
                                onChangeText={setPassword}
                                value={password}
                                secureTextEntry
                                placeholder='Password'
                            />
                            <TouchableOpacity style={styles.forgot}>
                                <Text style={styles.forgotText}>Forgot password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                                <Text style={styles.buttonText}>Sign In</Text>
                            </TouchableOpacity>
                            <View style={styles.connect}>
                                <TouchableOpacity style={styles.facebook}>
                                    <FontAwesome5 name='facebook' size={22} />
                                    <Text style={styles.facebookText}>Sign In with facebook</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.google}>
                                    <FontAwesome name='google' size={22} />
                                    <Text style={styles.googleText}>Sign In with google</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.signUp}>
                                <Text style={styles.account}>Don't have an account?</Text>
                                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('LogIn')}>
                                    <Text style={styles.button2Text}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1FBF5'
    },
    background: {
        resizeMode: 'cover'
    },
    full: {
        marginTop: 20,
    },
    signin: {
        marginVertical: 30,
        marginHorizontal: 20,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        paddingHorizontal: 10
    },
    whitebox: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#F1FBF5'
    },
    whiteboxContent: {
        marginHorizontal: 30,
        marginVertical: 20,
    },
    WelcomeText: {
        paddingVertical: 10,
        fontSize: 22,
        fontWeight: 'bold'
    },
    subText: {
        color: '#585959',
    },
    email: {
        paddingVertical: 10,
        backgroundColor: 'rgba(187, 191, 191, 0.2)',
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 10
    },
    password: {
        paddingVertical: 10,
        backgroundColor: 'rgba(187, 191, 191, 0.2)',
        borderRadius: 10,
        marginVertical: 15,
        paddingHorizontal: 10
    },
    forgot: {
        alignItems: 'flex-end'
    },
    forgotText: {
        color: '#5FB78F',
        fontSize: 14,
        fontWeight: '600'
    },
    button: {
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#5FB78F',
        borderRadius: 10,
    },
    buttonText: {
        paddingVertical: 15,
        color: '#FFF',
        fontWeight: '600'
    },
    connect: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 40,
        borderBottomWidth: 1
    },
    facebook: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 70,
        marginVertical: 10,
        borderColor: 'rgba(187, 191, 191, 0.8)',
    },
    facebookText: {
        paddingVertical: 15,
        textAlign: 'center',
        fontWeight: '600',
        marginLeft: 13,
        fontSize: 15
    },
    google: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 77,
        borderColor: 'rgba(187, 191, 191, 0.8)'
    },
    googleText: {
        paddingVertical: 15,
        textAlign: 'center',
        fontWeight: '600',
        marginLeft: 15,
        fontSize: 15
    },
    signUp: {
        justifyContent: 'center',
        marginTop: 20
    },
    account: {
        paddingHorizontal: 5,
        fontSize: 15,
        fontWeight: '600',
        paddingVertical: 10,
        color: '#585959',
    },
    button2Text: {
        paddingVertical: 15,
        paddingHorizontal: 125,
        backgroundColor: '#5FB78F',
        borderRadius: 10,
        color: '#FFF',
        fontWeight: '600'
    }
});

export default SignIn;
