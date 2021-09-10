import React from 'react';
import { Alert, Button, View } from 'react-native';
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "Titulo",
            "Cuerpo de la Alerta",
            // Arreglo que contiene el numero de opciones de la alerta
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "destructive"
                },
                {   
                    text: "OK", 
                    onPress: () => console.log("OK Pressed") 
                }
            ],
            // Argumentos opcionales
            {
                cancelable: true, // Solo sirve en Android y permite tocar fuera del alert sin haber seleccionado alguna opcion
                onDismiss: () => console.log("onDismiss") // Funcion que se ejecuta si 
            }
        )
    }

    const showPrompt = () => {
        /*
        Alert.prompt(
            '¿Estas seguro?', // Titulo
            'Esta acción no se puede revertir', //Cuerpo
            ( text: string ) => console.log('info: ', text), // Funcion a ejecutar al confirmar
            'plain-text', // Como desplegar el texto que ingresa el usuario
            'Default Text' // Texto por default
        )
        */
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                {
                    text: 'Cancel', 
                    onPress: () => console.log('Cancel Pressed'), 
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: password => console.log('OK Pressed, password: ' + password)
                },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts"/>
            <Button
                title="Mostrar Alerta"
                onPress={ showAlert }
            />

            <View style={{top:10}}/>

            <Button
                title="Mostrar Alerta"
                onPress={ showPrompt }
            />

        </View>
    )
}
