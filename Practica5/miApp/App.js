//Zona 1 importacion de archivos y componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludos} from './components/Saludos';
import {Saludos2} from './components/Saludos2';
import {Perfil} from './components/Perfil';

//Zona 2 Main Componentes
export default function App() {
  return (
    <View style={styles.container}>
      
      <Perfil nombre="Amaya Lopez Santiago" carrera="Ingeniería en Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="9" />
      <Perfil nombre="Santiago Amaya" carrera="Ingeniería en Sistemas Computacionales" materia="Programación Movil" cuatrimestre="9" />

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
