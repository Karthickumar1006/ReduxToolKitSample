import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {homeScreenAction} from '../Redux/HomeScreenRedux/Actions/HomeScreenActions';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [inputText, setinputText] = useState('');

  const valueChangeText = text => {
    setinputText(text);
    console.log('Text=====>', text);
  };

  const handleClick = () => {
    console.log('StateValue======>', inputText);
    dispatch(homeScreenAction(inputText));
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{margin: '5%'}}
        value={inputText}
        onChangeText={text => {
          valueChangeText(text);
        }}
        placeholder="Value will store in redux"></TextInput>
      <TouchableOpacity
        onPress={() => {
          handleClick();
        }}
        style={styles.ApiCallView}>
        <Text style={styles.textView}>Api Call</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  ApiCallView: {
    backgroundColor: 'blue',
    margin: '5%',
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textView: {
    color: 'white',
    fontSize: 18,
  },
});
export default HomeScreen;
