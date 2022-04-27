import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const SegmentView = ( props ) => {
    
    const [customStyleIndex, setCustomStyleIndex] = useState(0);

    const handleCustomIndexSelect = (customStyleIndex) => {
        setCustomStyleIndex(customStyleIndex);
    };

    function Create() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.createView}>
                    <Text style={styles.tabContent}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry.{"\n"}Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an{"\n"}unknown printer took a galley of type and scrambled it to make a type specimen book it has?  </Text>

                    <View style={styles.createBtn}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Players')}>
                            <Text style={styles.createBtnText}>Create</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.introBtn}>
                    <TouchableOpacity>
                        <Text style={styles.introBtnText}>Intro Video</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    function Join() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.joinView}>
                    <View>
                        <Text style={styles.tabContent}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputTextStyle}
                            placeholder={'Enter Facecase Code'}
                            placeholderTextColor={'white'}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputTextStyle}
                            placeholder={'Enter Facecase Code'}
                            placeholderTextColor={'white'}
                        />
                    </View>
                    <View style={styles.joinBtn}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Players')}>
                            <Text style={styles.createBtnText}>Join</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.joinIntroBtn}>
                    <TouchableOpacity>
                        <Text style={styles.introBtnText}>Intro Video</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={{ width: 60, height: 50, margin: 20, right: 50 }}
                    source={require('../assets/backBtn.png')}
                />

                <SegmentedControlTab
                    values={['Create', 'Join']}
                    selectedIndex={customStyleIndex}
                    onTabPress={handleCustomIndexSelect}
                    borderRadius={30}
                    tabsContainerStyle={{ height: 50, width: '80%', marginTop: 40, }}
                    tabStyle={{
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                        borderColor: 'white',
                    }}
                    activeTabStyle={{ backgroundColor: 'white' }}
                    activeTabTextStyle={{ color: 'green' }}
                    tabTextStyle={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}
                />
            </View>
            {customStyleIndex === 0 && (
                Create()
            )}
            {customStyleIndex === 1 && (
                Join()
            )}
        </View>

    );
};

export default SegmentView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    tabContent: {
        color: 'white',
        fontSize: 18,
        margin: 0,
        textAlign: 'justify'
    },
    createView: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        height: '60%',
        width: '100%',

    },
    joinView: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        height: '70%',
        width: '100%'
    },
    createBtn: {
        backgroundColor: 'maroon',
        width: 250,
        height: 50,
        borderRadius: 15,
        top: 40,

    },
    joinBtn: {
        backgroundColor: 'maroon',
        width: 250,
        height: 50,
        borderRadius: 15,
        top: 20,
    },
    createBtnText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 5
    },
    introBtn: {
        backgroundColor: 'purple',
        width: 250,
        height: 50,
        borderRadius: 15,
        top: 50
    },
    joinIntroBtn: {
        backgroundColor: 'purple',
        width: 250,
        height: 50,
        borderRadius: 15,
        top: 5
    },
    introBtnText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 5
    },
    inputTextStyle: {
        flex: 1,
        color: 'white',
    },
    inputView: {
        width: 450,
        height: 50,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        padding: 5,
        marginTop: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 2
    }
});