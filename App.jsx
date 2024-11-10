import { View, Text} from 'react-native';
//import OnPress from './src/components/OnPress';
//import UseStateHook from './src/components/UseStateHook';
//import FlatListScreen from './src/components/FlatListScreen';
// import SectionListScreen from './src/components/SectionListScreen';
// import LoginForm from './src/components/LoginForm';
//import Grid from './src/components/Grid';
import React from 'react';
//import UseEffectHook from './src/components/UseEffectHook';
//import Loader from './src/components/Loader';
import UseRefHook from './src/components/UseRefHook';
const App = () => {

  return (
    <View style={{flex:1}}>
      <Text>Main Component</Text>
      {/* <OnPress /> */}
      {/* <UseStateHook /> */}
      {/* <SectionListScreen /> */}
      {/* <FlatListScreen /> */}
      {/* <LoginForm /> */}
      {/* <Grid /> */}
      {/* <UseEffectHook/> */}
      {/* <Loader /> */}
      <UseRefHook/>
    </View>
  );
};



export default App;