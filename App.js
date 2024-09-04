import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'; 
import Testimonio from './COMPONENTES/flexboxC';

export default function App() {
  return (
    <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('./Imagenes/logo.png')} />

      <Text style={styles.titulo}>
        Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:
      </Text>

      <ScrollView style={styles.scrollView}>
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          cargo="Ingeniero de Software en Amazon"
          foto={require('./Imagenes/shawer.png')}
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de las cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software."
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          cargo="Ingeniera de Software en ChatDesk"
          foto={require('./Imagenes/sara.png')}
          testimonio="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevo mis conocimientos de programacion de un nivel de principiante total a un nivel muy seguro."
        />
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          cargo="Ingeniera de Software en Spotify"
          foto={require('./Imagenes/ema.png')}
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de FreeCodeCamp fue el pudo Estudiar JavaScript."
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  imagen: {
    height: 90,
    width: "100%",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  scrollView: {
    width: "100%",
  },
});
