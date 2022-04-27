import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlayersList from '../component/PlayersList';
import SampleLoop from '../SampleLoop';

export default function Players({navigation}) {
    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={require('../assets/backgroundImage.png')}
            resizeMode={'cover'}>

            <View style={styles.conatiner}>
                <View style={{ alignSelf: 'flex-start', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateRoom')}>
                    <Image
                        style={{ width: 60, height: 50, margin: 30, }}
                        source={require('../assets/backBtn.png')}
                    />
                    </TouchableOpacity>
                </View>

                <View style={styles.subcontainer}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.otherText}>Facecase game code: 123456789</Text>
                        <Text style={styles.otherText}>Share this code with your friends and ask them to join</Text>
                    </View>
                    <View>
                        <Ionicons name="bluetooth" size={40} color='white'/>
                    </View>
                </View>
                <View>
                    <Text style={styles.playersText}>Players</Text>
                </View>
                <View style={{flex:1}}>
                    <PlayersList/>
                </View>
                <View style={styles.startBtn}>
                    <TouchableOpacity>
                        <Text style={styles.startBtnText}>Start</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
    },
    subcontainer: {
        borderColor: 'white',
        width: '70%',
        height: '20%',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderStyle: 'dashed',
        bottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    playersText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 3, height: 3 },
        bottom: 20,
        elevation:5
    },
    otherText:{
        color: 'white', 
        fontSize: 20, 
        left: 70
    },
    startBtn:{
        backgroundColor: 'purple',
        width: 250,
        height: 50,
        borderRadius: 15,
        bottom:10,
    },
    startBtnText:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 5
    }
});