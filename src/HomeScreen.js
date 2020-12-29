import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {wp, hp} from './utils/responsive';
import FloatInput from './components/FloatInput';
import FloatButton from './components/FloatButton';

const HomeScreen = ({navigation}) => {
  const [name, setName] = useState('abu');
  const [password, setPassword] = useState('bima');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>UBOLD</Text>
        <FloatInput
          username={name}
          onChangeText={(txt) => setName(txt)}
          placeholder="username"
        />
        <FloatInput
          username={password}
          onChangeText={(txt) => setPassword(txt)}
          placeholder="password"
        />
        <FloatButton name="simpan" onPress={()=>{navigation.navigate('About',{name,password})}}/>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header: {
    width: wp,
    height: hp,
    backgroundColor: '#1985b3',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
  headerText: {
    color: '#ffffff',
    marginBottom: 50,
    fontSize: 80,
    fontFamily: 'Poppins-ExtraBold',
    shadowColor: 'black',
    shadowOffset: {
      width: 3,
      height: -2,
    },
    shadowOpacity: 20,
    shadowRadius: 20,
  },
});
