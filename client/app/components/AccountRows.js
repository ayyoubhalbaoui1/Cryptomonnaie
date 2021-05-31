import React from 'react'
import { View, Text ,Dimensions} from 'react-native'
const { height, width } = Dimensions.get("screen")

export default function AccountRows(props) {
    const {data} = props
    // console.log(data);
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: width / 1.2, alignItems: 'center', marginTop: 55, borderTopWidth: 1, borderColor: '#333', padding: 5 }}>
            <View>
                <Text style={{ color: '#50fa7b', fontSize: 20 }}>{data.cryp_name}</Text>
            </View>
            <View>
                <Text style={{ color: '#50fa7b' }}>{data.wallet_number}</Text>
            </View>
            <View>
                <Text style={{ color: '#50fa7b' }}>{data.value}</Text>
            </View>
        </View>
    )
}
