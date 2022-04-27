import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Participant from '../Data';

export default function PlayersList() {
    const [arr, setArr] = useState([])

    var i = -1

    function myLoop() {
        setTimeout(function () {
            i++;
            setArr((arr) => {
                const temp = [...arr]
                if (i < Participant.length) {
                    temp.push(Participant[i])
                    myLoop();
                }
                return temp;
            })
        }, 2000);
    }

    useEffect(() => {
        myLoop();
    }, []);

    const renderParticipant = ({ item }) => {

        return (
            <View>
                <View>
                    <Image source={item.image} style={styles.ImageStyle} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.textStyle}>{item.name}</Text>
                    <Text style={styles.textStyle}>{item.surname}</Text>
                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={arr}
                renderItem={renderParticipant}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ImageStyle: {
        width: 70,
        height: 70,
        marginHorizontal: 25,
        borderRadius: 35
    },
    textStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
});