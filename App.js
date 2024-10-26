import { View, Text, SafeAreaView} from "react-native";
import React from "react";
import Home from "./src/app/index";
import { ScrollView } from "react-native-web";
const App = () => {
  return (
    <SafeAreaView>
        
      <ScrollView>
       
        <Home />
      </ScrollView>
    
    </SafeAreaView>
  );
};

export default App;
