import React, { useState,useEffect } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
// import { setItemToLocalStorage, getItemFromLocalStorage } from '../data/LocalStorage'
import { saveItem, getItem } from '../data/LocalStorage'

import { styles } from '../styles/style'
import { useHistory } from 'react-router-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import firebase from '../../config/firebase'
import axios from 'axios'
// import {API_URL,API_KEY} from '../../config'
import { API_URL,API_HEROKU,API_KEY } from '@env'
import Loading from '../shared/Loading'
import getInfoAboutCurrenct from '../data/GetData';


const emailImg = require('../../assets/email2.png')
const passwordLock = require('../../assets/passwordLock.png')

export default function SignIn(props) {
    console.log(API_KEY);
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    var [token, setToken] = useState('')


   async function testApi() {
        try {
            const newUser = await axios.post(API_URL + 'user/add/12'  )
                .then(response => {
                    console.log(response.data);
                    
                })

        } catch (error) {
            setLoading(false)
            console.log(error.message)
        }
    }
    
    function login() {
        setLoading(true)
        console.log('click');
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async user => {

                console.log(user.user.uid)
                try {
                    const newUser = await axios.post(API_URL+'user/add/' + user.user.uid)
                        .then(response => {
                            setLoading(false)
                            console.log(response.data.token);
                            saveItem('token',response.data.token);
                            history.push({
                                pathname: '/info',
                                state: { jwt: response.data.token }
                            })
                        })

                } catch (error) {
                    setLoading(false)
                    console.log(error.message)
                }

                // history.push('/info')
            })
            .catch(FirebaseAuthException => {
                setLoading(false)
                console.log(FirebaseAuthException)
            })
    }
    // const setCurrencyInfo =null
    // const user = {
    //     localCrncy:"USD"
    // }
    // useEffect(() => {
    //     testApi()
    // }, [])
    return (

        <KeyboardAvoidingView
        >
            <ScrollView
            >
                
                
                <View style={styles.container}>
                {
                    !loading  ?
                    <>
                    <View style={styles.loginView}>
                        <Text style={styles.loginText}>Sign in</Text>
                        <View style={styles.inputSection}>
                            <Image
                                source={emailImg}
                                style={styles.loginIcon}
                            ></Image>
                            <TextInput style={styles.input}
                                onChangeText={setEmail}
                                textAlign='center'
                                placeholder="Email"
                                autoCapitalize='none'
                                placeholderTextColor="#FFFF"
                                // autoCompleteType='email'
                                keyboardType='email-address'
                            ></TextInput>
                        </View>


                        {/* password  */}

                        <View style={styles.inputSection}>
                            <Image
                                source={passwordLock}
                                style={styles.loginIcon}
                            ></Image>
                            <TextInput style={styles.input}
                            placeholderTextColor="#FFFF"
                                onChangeText={setPassword}
                                secureTextEntry={true}
                                placeholder="Password"
                            ></TextInput>
                        </View>

                    </View>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => login()} >
                        <Text style={styles.txtBtn} >Log In</Text>
                    </TouchableOpacity>
                    <Text style={styles.text} ><Text style={styles.textSignUp} onPress={() => history.push('/sign-up')}>Sign up</Text></Text>
                    </>
                    :<Loading title="login ..."/>
                    }
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}
