import React,{useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { floor } from 'react-native-reanimated'
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')
        },6000)
    })
    return (
        <View style={styles.container}>
          <LottieView style={{width:200}} source={require('../assets/animation/pohon.json')} autoPlay loop />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flex:1,
        backgroundColor:'#1985b3',
        justifyContent:'center',
        alignItems:'center'
    }
})
