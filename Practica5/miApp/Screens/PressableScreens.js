import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function PressableScreen() {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState('');

  return (
    <View style={styles.container}>
      <Text>Componente Pressable</Text>
      
      <Pressable
        onPress={() => setContador(contador + 1)}
        onLongPress={() => {
          setContador(0);
          setMensaje('Contador Reiniciado');
        }}
        onPressIn={() => setMensaje('Botón Presionado')}
        onPressOut={() => setMensaje('Botón Liberado')}
        style={({ pressed }) => [
          styles.boton,
          pressed ? styles.botonPresionado : styles.botonNormal
        ]}
      >
        <Text style={styles.textoBoton}>Presióname</Text>
      </Pressable>

      <Text style={styles.textoContador}>Contador: {contador}</Text>
      <Text style={styles.textoContador}>{mensaje}</Text>
      <Text>Manten presionado el botón para reiniciar el contador</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boton: {
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  botonNormal: {
    backgroundColor: 'lightblue'
  },
  botonPresionado: {
    backgroundColor: 'darkblue'
  },
  textoBoton: {
    color: 'white',
    fontSize: 16
  },
  textoContador: {
    marginTop: 10,
    fontSize: 18
  }
});