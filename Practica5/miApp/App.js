//Zona 1 importacion de archivos y componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludos} from './components/Saludos';
import {Saludos2} from './components/Saludos2';

//Zona 2 Main Componentes
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/wave.png')}/>
      <Text>Hola Mundo</Text>
      <Text>----------------------------------------------</Text>
      <Saludos/>  
      <Text>----------------------------------------------</Text>
      <Saludos2/>
      <StatusBar style="auto" />
    </View>
  );
}

//Zona 3 Estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
