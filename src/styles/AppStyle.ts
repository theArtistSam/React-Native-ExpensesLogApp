import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({    
  darkMode: {
    backgroundColor: '#222222',
    color: 'white',
  },
  lightMode: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'darkgreen',
  },
  app: {
    flex: 1,
    padding: 10
  },
  appBar: {
    // backgroundColor: 'darkgreen',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  toggle: {        
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  picker:{
    flex: 1,
    margin: 2,
    borderRadius: 10,
    backgroundColor: 'darkgreen',
  },
  textInput: {
    borderColor: 'darkgreen',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  expenses:{
    padding: 10,
  }
});

export default styles;
