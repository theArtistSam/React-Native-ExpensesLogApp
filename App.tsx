// export default App;
import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import TaskScreen from './src/screens/Task';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Text>ABC</Text> */}
      <TaskScreen />
    </SafeAreaView>
  );
};

export default App;
