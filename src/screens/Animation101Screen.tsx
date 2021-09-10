import React, { useRef } from 'react';
// Animated API de React Native
import { StyleSheet, View, Animated, Button  } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();

    return (
        <View
            style={ styles.container }
        >
            {/* Usamos Animated.<componente> en este caso View para indicar
                que este componente tendra una animación especificamente 
                en opacity
            */}
            <Animated.View
                style={{
                    ...styles.purpleBox,
                    opacity: opacity,
                    transform: [{translateY:position}]
                }}
            />

            {/* Botones que convocan la funcion para disparar la animacion */}
            <Button
                title="FadeIn"
                onPress={ () => { fadeIn(); startMovingPosition(700,-100,0); } }
            />

            <Button
                title="FadeOut"
                onPress={ fadeOut }
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: "#5856D6",
        width: 150,
        height: 150
    }
});