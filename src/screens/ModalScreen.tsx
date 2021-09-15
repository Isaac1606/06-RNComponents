import React, { useState } from 'react';
import { View, Button, Modal, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

    // En este caso la variable que controla el modal es definida con ayuda de useState
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View
            style={styles.globalMargin}
        >
            <HeaderTitle title="Modal Screen"/>
            <Button
                title="Abrir Modal"
                onPress={() => { setIsVisible(true) }} 
            />

            <Modal
                animationType="fade"
                // Variable que controla si el modal se despliega o no
                visible= { isVisible }
                transparent={true}
            >
                {/* background del Modal que cubre el contenido de la pantalla previa */}
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >

                    {/* Contenido del Modal */}
                    <View
                        style={{
                            backgroundColor: 'white',
                            width: 200,
                            height: 200,
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowOffset: {
                                width: 0,
                                height: 10
                            },
                            shadowOpacity: 0.25,
                            elevation: 10,
                            borderRadius: 5
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
                            <Text style={{ fontSize: 16, fontWeight: '300', marginBottom:30 }}>Cuerpo del Modal</Text>
                            <Button
                                title="Cerrar"
                                onPress={ () => { setIsVisible(false) }}
                            />
                    </View>

                </View>
                
            </Modal>

        </View>
    )
}
