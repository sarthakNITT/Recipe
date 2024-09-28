import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSignup = async () => {
      if (password !== confirmPassword) {
        Alert.alert("Passwords do not match");
        return;
      }
      try {
        const user = { email, password };
        await AsyncStorage.setItem(email, JSON.stringify(user));

        setEmail('');
        setPassword('');
        setConfirmPassword('');

        Alert.alert('Signup Successful!', 'Your account has been created.');
        } catch (error) {
        Alert.alert('Signup Failed', error.message);
        }
    };

  return (
    <SafeAreaView style={styles.comtainer}>
        <ImageBackground style={styles.background} source={require('./images/background.png')}>
            <View style={styles.full}>
                <Text style={styles.signin}>Sign In</Text>
            <View style={styles.whitebox}>
                <View style={styles.whiteboxContent}>
                    <Text style={styles.WelcomeText}>Create a new account</Text>
                    <Text style={styles.subText}>To keep connected with us please Sign In with your personal info</Text>
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
                        keyboardType='password'
                        placeholder='Password'
                    />
                    <TextInput
                    style={styles.password}
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        secureTextEntry
                        keyboardType='password'
                        placeholder='Confirm Password'
                    />
                    <TouchableOpacity style={styles.forgot}>
                        <Text style={styles.forgotText}>Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleSignup} >
                            <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <View style={styles.connect}>
                        <TouchableOpacity style={styles.facebook}>
                            <FontAwesome5 name='facebook' size={22} />
                            <Text style={styles.facebookText}>Sign In with facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.google}>
                            <FontAwesome  name='google' size={22} />
                            <Text style={styles.googleText}>Sign In with google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>   
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    comtainer:{
        flex:1,
        backgroundColor: '#F1FBF5'
    },
    background:{
        resizeMode: 'cover'
    },
    full:{
        marginTop:20,
    },
    signin:{
        marginVertical:30,
        marginHorizontal:20,
        fontSize:28,
        fontWeight: 'bold',
        color: '#FFF',
        paddingHorizontal: 10
    },
    whitebox:{
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        backgroundColor: '#F1FBF5'
    },
    whiteboxContent:{
        marginHorizontal:30,
        marginVertical:20,
    },
    WelcomeText:{
        paddingVertical:10,
        fontSize:22,
        fontWeight: 'bold'
    },
    subText:{
        color:'#585959',
    },
    email:{
        paddingVertical:10,
        backgroundColor: 'rgba(187, 191, 191, 0.2)',
        borderRadius:10,
        marginTop:20,
        paddingHorizontal:10
    },
    password:{
        paddingVertical:10,
        backgroundColor: 'rgba(187, 191, 191, 0.2)',
        borderRadius:10,
        marginTop:15,
        paddingHorizontal:10
    },
    forgot:{
        alignItems:'flex-end',
        marginTop:10
    },
    forgotText:{
        color:'#5FB78F',
        fontSize: 14,
        fontWeight: '600'
    },
    button:{
        alignItems:'center',
        marginTop:30,
        backgroundColor:'#5FB78F',
        borderRadius:10,
    },
    buttonText:{
        paddingVertical:15,
        color: '#FFF',
        fontWeight: '600'
    },
    connect:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom:40,
    },
    facebook:{
        flexDirection: 'row',
        alignItems:'center',
        borderRadius:10,
        borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:70,
        marginVertical:10,
        borderColor: 'rgba(187, 191, 191, 0.8)',
    },
    facebookText:{
        paddingVertical:15,
        textAlign: 'center',
        fontWeight: '600',
        marginLeft:13,
        fontSize: 15
    },
    google:{
        flexDirection: 'row',
        alignItems:'center',
        borderRadius:10,
        borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10,
        paddingHorizontal:77,
        borderColor: 'rgba(187, 191, 191, 0.8)'
    },
    googleText:{
        paddingVertical:15,
        textAlign: 'center',
        fontWeight: '600',
        marginLeft: 15,
        fontSize: 15
    },
})
export default SignIn;