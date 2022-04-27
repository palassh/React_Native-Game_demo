import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function SampleLoop() {
    const [index, setIndex] = useState(0);
    // const [timerId, setTimerId] = useState(0);
    
    const images = [require('./assets/backBtn.png'),
    require('./assets/favicon.png'),
    require('./assets/god.jpg'),
    require('./assets/favicon.png'),
    require('./assets/icon.png'),
    require('./assets/splash.png')]

    const title = ["a", "b", "c", "d", "e", "f"]
    const subtitle = ["a", "b", "c", "d", "e", "f"]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((index) => index + 1)
        }, 2000);
    },[]);

    const img = images[index % 6]
    const name = title[index % 6]
    const surname = subtitle[index % 6]

    return (
        <View style={styles.container}>
            <Image style={{ width: 80, height: 80, borderRadius: 40 }}
                source={img}
            />
            <Text>{name}</Text>
            <Text>{surname}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 60,
        height: 10,
        backgroundColor: 'red',
        margin: 20
    }
});