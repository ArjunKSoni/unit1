import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Button, Text, View, Image,TouchableOpacity, TextInput } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [k,setK]=useState(0);
  const [text,setT]=useState("");
  useEffect(() => {
    
  }, [])
  const press=()=>{
    setK(k+1)
  }
  const press2=()=>{
    setK(k-1)
  }

  return (
    <View className="flex-1 items-center justify-center bg-black">

      <Button title='press me' onPress={()=>Alert.alert(text)}></Button>
      <Image
        className="w-40 h-40 mt-5"
        source={require("./assets/favicon.png")}/>
      <Text className="text-white mb-10 text-2xl">{k}</Text>

      <TouchableOpacity style={styles.button} className="mb-5 rounded" onPress={press}>
        <Text className="text-xl text-red-500">++</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} className="rounded" onPress={press2}>
        <Text className="text-xl text-green-500 rounded">--</Text>
      </TouchableOpacity>

      <TextInput className="w-60 h-10 mt-4 rounded-xl bg-white content-center p-3" onChangeText={(e)=>setT(e)} value={text}/>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    button: {
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 10,
    width:80
  },
});