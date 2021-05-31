import React, { useState, useEffect } from 'react'
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { useHistory } from 'react-router-native'
import BackButton from '../shared/backButton';
import { styles } from '../styles/style'
import AccountRows from './AccountRows'
const userImage = require('../../assets/user-icon.png')
const { height, width } = Dimensions.get("screen")
import axios from 'axios'
import { API_HEROKU,API_URL } from '@env';


export default function Account(props) {
    const history = useHistory()
    const { jwt } = props.history.location.state

    const [user, setUser] = useState([])
    const [wallets, setWallets] = useState()
    function getUser() {
        axios.get(API_URL + 'user', {
            headers: {
                'auth-token': jwt
            }
        })
            .then(response => {
                // console.log(response.data);
                setUser(response.data.user)
                setWallets(response.data.walletUser[0])

            })

            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {

        getUser()
    }, [])
    // console.log(user);
    // console.log(wallets);
    return (
        <View style={styles.container}>
            <BackButton
                route='/info'
                jwt={jwt}


            />
            {
                user && user ?
                    <>
                        <View style={{ backgroundColor: 'white', borderRadius: 50, height: 60, width: 0, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={[styles.img, { tintColor: "#000", width: 50, height: 50 }]}
                                source={userImage}
                            />
                        </View>



                        <Text style={{ color: '#FFFF', marginTop: 15, fontSize: 18 }}>Profile</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: width / 1.2, alignItems: 'center', marginTop: 25 }}>
                            <View
                                style={{ textAlign: 'center', justifyContent: 'center', }}
                            >
                                <Text style={{ color: '#FFFF', fontSize: 18 }}>sold</Text>
                                <Text style={{ color: '#FFFF' }}>{user.solde}</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#FFFF', fontSize: 20 }}>|</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#FFFF', fontSize: 18 }}>{user.localCrncy}</Text>
                                {/* <Text style={{color:'#FFFF'}}>5000</Text> */}
                            </View>
                            <View>
                                <Text style={{ color: '#FFFF', fontSize: 20 }}>|</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => history.push({
                                    pathname: '/sale',
                                    state: { jwt: jwt, wallets: wallets }
                                })}>

                                    <Text style={{ color: '#FFFF', fontSize: 18 }}>sale</Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                        <ScrollView>

                            {
                                wallets && wallets ?
                                    wallets.map(data => (
                                        <AccountRows data={data} jwt={jwt} key={data.id} />
                                    ))
                                    : <Text>no wallet</Text>
                            }

                        </ScrollView>
                        <TouchableOpacity
                            onPress={() => history.push('/')}
                        >

                            <Text style={{ color: '#FFFF', fontSize: 18, marginVertical: 15 }}>log out</Text>
                        </TouchableOpacity>
                    </>
                    : <Text>please restart the app</Text>
            }
        </View >
    )
}
