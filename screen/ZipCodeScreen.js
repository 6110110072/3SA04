import React from 'react'
import { FlatList, View , Text , StyleSheet, ImageBackground } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110'},
    { place: 'Trang', code: '92000'},
    { place: 'Chiangmai', code: '50000'},
    { place: 'Khonkaen', code: '40000'},
    { place: 'Chonburi', code: '20000'},
]



    const ZipItem = ({place, code, navigation,pic}) => (
        <TouchableHighlight onPress={() => (
            navigation.navigate('Weather', {zipCode: code})
        )}>
            <View style={styles.zipItem}>
                {/* <ImageBackground source={pic} style={styles.backdrop}></ImageBackground> */}
                <Text>{place}</Text>
                <Text>{code}</Text>
            </View>
        </TouchableHighlight>
    )
    export default function zipCodeScreen() {
        const navigation = useNavigation()
        return (
            <FlatList
                data = {availableZipItems} 
                keyExtractor = {item => item.code} 
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
        )
    }

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
        height: "50%",
      },
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
})