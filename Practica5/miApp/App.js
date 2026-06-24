//Zona 1 importacion de archivos y componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MenuScreen from './Screens/MenuScreen';

//Zona 2 Main Componentes
export default function App() {
  return (
    <MenuScreen />
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
