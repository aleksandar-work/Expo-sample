import React, { Component, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    FlatList,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    ScrollView
} from "react-native";
import theme from '../../Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import TransText from "../../components/both/transtext"
import Swiper from '../../components/both/Swiper';
import {
    Icon
} from 'native-base'
//functional component
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const screenRatio = screenWidth / screenHeight;
const data = [
    {
        id: 0,
        image: 'https://placeimg.com/640/640/people',
    },
    {
        id: 1,
        image: 'https://placeimg.com/640/640/nature',
    },
    {
        id: 2,
        image: 'https://placeimg.com/640/640/animals',
    },
    {
        id: 3,
        image: 'https://placeimg.com/640/640/beer',
    },
    {
        id: 4,
        image: 'https://placeimg.com/640/640/any',
    },
    {
        id: 5,
        image: 'https://placeimg.com/640/640/animal',
    },
    {
        id: 6,
        image: 'https://placeimg.com/640/640/any',
    },
    {
        id: 7,
        image: 'https://placeimg.com/640/640/any',
    },
    {
        id: 8,
        image: 'https://placeimg.com/640/640/animals',
    },
    {
        id: 9,
        image: 'https://placeimg.com/640/640/beer',
    },
    {
        id: 10,
        image: 'https://placeimg.com/640/640/any',
    }
];
const Splash = () => {
    const navigation = useNavigation();
    const [image, setImage] = useState("https://placeimg.com/640/640/people");
    const [index, setIndex] = useState(0);
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: image }} style={styles.logoicon} />
            <View style={styles.topcontainer}>
                <Text style={{
                    fontSize: 30,
                }}>
                    <Text style={{ fontWeight: 'bold' }}>Anna</Text> 19
                </Text>
                <View style={{ flexDirection: 'row', }}>
                    <Icon type={'FontAwesome'} name={'university'} style={{ fontSize: 15, color: 'gray' }} />
                    <Text style={{ marginLeft: 10 }}>
                        University of San Francisco
                </Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Icon type={'EvilIcons'} name={'location'} style={{ fontSize: 25, color: "gray", marginLeft: -5 }} />
                    <Text style={{ marginLeft: 6 }}>
                        1 mile away
                </Text>
                </View>
            </View>
            <View style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                paddingHorizontal: 25,
                paddingVertical: 15,
            }}>
                <Text style={{ fontSize: 15, color: 'gray' }}>
                    Moved from the East Coast & just want to meet some new people.
                </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingHorizontal: 25, paddingVertical: 15, }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Recent Instagram Photos
                    </Text>
                    <View style={{ flexDirection: 'row', width: 45, justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setIndex(0)} style={{ backgroundColor: index == 0 ? '#FD1C60' : 'gray', width: 15, height: 15, borderRadius: 15 / 2 }}>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIndex(1)} style={{ backgroundColor: index == 1 ? '#FD1C60' : 'gray', width: 15, height: 15, borderRadius: 15 / 2 }}>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: screenHeight * 0.4 }}>
                    <Swiper
                        loop={true}
                        dotColor="#bbbbbb"
                        activeDotColor="#ffffff"
                        showsPagination={false}
                        showsButtons={false}
                        autoplayTimeout={3}
                        onIndexChanged={(index) => { setIndex(index) }}
                        style={styles.wrapper}>
                        <FlatList
                            data={data}
                            renderItem={({ item, index, separators }) => index < 7 ? (
                                <TouchableOpacity onPress={() => setImage(item.image)} style={styles.postitem1} key={index}>
                                    <Image source={{ uri: item.image }} style={styles.imageitemss} />
                                </TouchableOpacity>
                            ) : null}
                            keyExtractor={(item) => item.id}
                            numColumns={3}
                        />
                        <FlatList
                            data={data}
                            renderItem={({ item, index, separators }) => index >= 6 ? (
                                <TouchableOpacity onPress={() => setImage(item.image)} style={styles.postitem1} key={index}>
                                    <Image source={{ uri: item.image }} style={styles.imageitemss} />
                                </TouchableOpacity>
                            ) : null}
                            keyExtractor={(item) => item.id}
                            numColumns={3}
                        />
                    </Swiper>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity style={styles.uiconitem}>
                        <Icon type={'FontAwesome'} name={'close'} style={{ fontSize: 50, color: '#FD1C60' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.centerbutton}>
                        <Icon type={'FontAwesome'} name={'star'} style={{ fontSize: 40, color: '#0695E2' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.uiconitem}>
                        <Icon type={'FontAwesome'} name={'heart'} style={{ fontSize: 50, color: '#11E19D' }} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
export default Splash;

const styles = StyleSheet.create({
    topcontainer: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal: 25,
        paddingVertical: 10,
    },
    logoicon: {
        width: screenWidth,
        height: screenHeight * 0.3,
        resizeMode: 'cover'
    },
    centerbutton: {
        backgroundColor: '#fff',
        height: 65,
        width: 65,
        borderRadius: 65 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: -5
    },
    uiconitem: {
        backgroundColor: '#fff',
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageitemss: {
        width: screenWidth * 0.3,
        height: screenWidth * 0.3,
        resizeMode: 'cover',
        borderRadius: 15,
    },
    postitem1: {
        margin: screenWidth * .015,
    },
    container: { flex: 1, backgroundColor: '#f7f7f7' },
    paragraph: {
        fontFamily: theme.pop,
        fontSize: theme.medium,
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 30,
        paddingRight: 30
    },
    mainBtn: {
        backgroundColor: theme.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('90%'),
        height: hp(7.5),
        borderRadius: 5
    },
    btntext: {
        fontSize: theme.medium,
        color: '#fff',
        fontFamily: theme.pop
    },
});