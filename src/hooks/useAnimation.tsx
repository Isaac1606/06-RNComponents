import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {

    // Con ayuda del hook de useRef se crea un AnimatedValue
    const opacity = useRef(new Animated.Value(0)).current; // se accede al valor del useRef con .current

    const position = useRef(new Animated.Value(0)).current;

    // Funciones que sirven para disparar la animación 
    const fadeIn = () => {
        // Animacion que ocurre conforme el tiempo
        // como 1° argumento recibe un AnimatedValue
        // como 2° argumento recibe un objeto con las propiedades toValue,duarion,useNativeDriver 
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 300, // 300 milisegundos
                useNativeDriver: true
            }
            // estas funciones reciben como argumento opcional un call back que se ejecuta
            // una vez que termina la animación
        ).start( () => console.log('animacion termino') ); // Con esto empieza la animacion 
        // .reset() lo deja como estaba originalmente
        // .stop() detiene la animacion 
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    }

    const startMovingPosition = ( duration: number, initPosition: number, finalPosition: number) => {
        
        position.setValue(initPosition);

        Animated.timing(
            position,
            {
                toValue: finalPosition,
                duration: duration,
                useNativeDriver: true,
                easing: Easing.bounce // para agregar efecto de rebote
            }
        ).start()

    }

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition
    }

}


