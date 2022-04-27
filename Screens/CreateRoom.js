import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

import SegmentView from '../component/SegmentView';


export default function CreateRoom({navigation}) {
   
    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={require('../assets/backgroundImage.png')}
            resizeMode={'cover'}>

            <View style={styles.container}>
                <SegmentView navigation={navigation}/>               
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})