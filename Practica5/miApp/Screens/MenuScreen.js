//Zona 1: Importaciones de archivos y Componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button} from 'react-native';
import react, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import PressableScreen from './PressableScreens';
import SwitchScreen from './SwitchScreen';
import FlatListScreen from './FlatList';
import SectionListScreen from './SectionListScreen';

//Zona 2: Main - componentes 
export default function App() {
    const [screen, setScreen] = useState('menu');
    switch (screen) {
        case 'tarjetas':
            return <TarjetasScreen />;
        case 'componente1':
            return <Componente1 />;
        case 'Switch':
            return <SwitchScreen />;
        case 'pressable':
            return <PressableScreen />;
        case 'FlatList':
            return <FlatListScreen />;
        case 'SectionList':
            return <SectionListScreen />;
        case 'menu':
            
        default:
        return (
            <view>
            <text>Menú de Practicas</text>
            <Button title="Practica Tarjetas" onPress={() => setScreen('tarjetas')} />
            <Button title="Practica Componente1" onPress={() => setScreen('componente1')} />
            <Button title="Practica Switch" onPress={() => setScreen('Switch')} />
            <Button title="Practica Pressable" onPress={() => setScreen('pressable')} />
            <Button title="Practica FlatList" onPress={() => setScreen('FlatList')} />
            <Button title="Practica SectionList" onPress={() => setScreen('SectionList')} />
            </view>
    
  ); //return 
  } //switch
} //funcion

//Zona 3: Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});