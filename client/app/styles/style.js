import { StyleSheet, Dimensions } from 'react-native';
import Constanse from 'expo-constants'
const { height, width } = Dimensions.get("screen")

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6272a4",
        height: height,
        color: 'white',
        alignItems: 'center',
        flex: 1,
        
    },
    text: {
        color: "white",
        marginTop: 15
    },
    img: {
        width: 50,
        height: 50,
    },
    section: {
        height: 90,
        backgroundColor: '#6272a4',
        paddingTop: 25,
        paddingHorizontal: 10,
        width: width,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: '#f1fa8c',
        borderWidth: 3,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        marginVertical: 15,
        width: width / 1.1,
        borderRadius:0,
        alignItems:'center'
    },
    name:{
        marginTop:3
    },
    loginView:{
        marginTop:100
    },
    loginText:{
        color:'#fcfcfc',
        fontSize:25,
        marginRight:200,
        marginBottom:100, 
        fontWeight:'bold'
    },
    inputSection:{
        flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor :'#FFFF',
    borderBottomWidth: 1,
    marginVertical:35,
    maxWidth:230,
    },
    input:{
        marginLeft:25,
        height:40,
        color:'white',
        
    },
    loginIcon:{
        width:25,
        height:25
    },
    loginBtn:{
        backgroundColor:'#6272a4',
        height:45,
        width:135,
        alignItems:'center',
        justifyContent:'center',
    },
    txtBtn:{
        color:'white'
    },
    textSignUp:{
        color:'#93a6b1'
    },
    backBar:{
        backgroundColor:'#6272a4',
        padding:40
        // marginTop: Constanse.statusBarHeight,
    },
   
   
    
    loadingContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        height:height,
        backgroundColor:'transparent',
    },
    buyBtn:{
        backgroundColor:'#FFFF',
        borderRadius:12,
        padding:3,
        justifyContent: 'center',
        height:75,width:70,
        alignItems: 'center',
        marginTop:height / 6
    },
    buySection:{
        marginTop:- height / 8
    },
    buyHeader:{
        justifyContent: "space-between",
        flexDirection: "row",
        width:width,
        
    },
    buyInput:{
        borderColor:'#FFFF',
        borderWidth:1,
        width:width / 1.3,
        borderRadius:12,
        textAlign: 'center'
    },
    cryptoValue:{
        color:'white'
    },
    serctionAccountIcon:{
        backgroundColor:'#6272a4',
        padding:5,
        paddingTop:Constanse.statusBarHeight,
        flexDirection: "row",
        justifyContent: 'flex-end'
    },
    accountBtn:{
        backgroundColor: '#FFFF',
        borderRadius: 12,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        height: 65, width: 60,
    }
})