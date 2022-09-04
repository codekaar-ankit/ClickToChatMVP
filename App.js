import React, { useState } from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  ImageBackground,
  Linking,
  Image,
  Pressable,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isMobileValid, setIsMobileValid] = useState(1);
  const [message, setMessage] = useState(null);
  const [mobileNo, setMobileNo] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const sendMessage = () =>{
    if(validatationNumber()){
      Linking.openURL(`http://wa.me/91${mobileNo}`);
    }
  }


  const validatationNumber = () =>{
    if (mobileNo.length == 10) {
      setIsMobileValid(true)
      return true;
    } else {
      alert("Please input correct mobile number")
      setIsMobileValid(false)
      return false;
    }
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            height:"200%",
          }}>

          <ImageBackground source={require('./assest/Whatsapp-logo.jpg')} style={styles.backgroundImage}>
            <Text  style = {styles.titleText}>Click to Chat in Whatsapp</Text>
            <Text>{isMobileValid}</Text>
            <TextInput style = {styles.addMobileNo} placeholder = "Please input mobile number"
              placeholderTextColor = "#E21717" keyboardType="numeric"
              onChangeText={text => setMobileNo(text)} />

            <Pressable style = {styles.insideButton} onPress={sendMessage} title="Message" >
              <Text style = {styles.insideButtonText}>Message</Text></Pressable>
          </ImageBackground>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addMobileNo: {
    height: 80,
    margin: 12,
    borderWidth: 5,
    padding: 10,
    marginTop: 100,
    fontSize: 20,
    fontWeight: "bold",
  },
  insideButton: {
    height: 50,
    borderWidth:5,
    borderRadius: 20,
    marginLeft: "25%",
    marginRight: "25%",
    marginVertical : "2%",
    backgroundColor: "#758283",
    // color : "#E21717",
    padding: 2,
  },
  insideButtonText : {
    textAlign: 'center',
    marginTop:4,
    fontSize: 20,
    fontWeight: "bold",
    color: "#E21717",
  },
  backgroundImage: {
    flex: 1,
    // marginTop: 60,
    // marginBottom: 20,
    width: "100%",
    height: "32%",
    resizeMode: 'cover',
  },
  titleText: {
    marginTop: 150,
    marginLeft: "20%",
    height : 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#E21717",
    },
});

export default App;