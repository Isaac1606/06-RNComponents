import React from 'react';
import {Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {

    const {inputValues, handleInputChanges} = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    const { isSubscribed } = inputValues;

    return (
        <KeyboardAvoidingView
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={ {...styles.globalMargin }}>
                        
                        <HeaderTitle title="TextInputs"/>
                        {/* Se debe definir estilos debido a que por defecto es transparente */}
                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder= "Nombre"
                            autoCorrect={ false }
                            autoCapitalize="words"
                            onChangeText={ value => handleInputChanges( value, 'name' ) }
                            placeholderTextColor="grey"
                        />
                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder= "Email"
                            keyboardType="email-address"
                            autoCorrect={ false }
                            autoCapitalize="none"
                            placeholderTextColor="grey"
                            onChangeText={ value => handleInputChanges( value, 'email' )}
                        />
                        <TextInput
                            style={stylesScreen.inputStyle}
                            keyboardType="phone-pad"
                            placeholder= "Télefono"
                            placeholderTextColor="grey"
                            onChangeText={ value => handleInputChanges(value, 'phone')}
                        />

                        <View
                            style={{paddingHorizontal: 10, flexDirection: 'row', justifyContent:'space-between'}}
                        >
                            <Text
                                style={{ fontSize:22}}
                            >
                                Suscribed: 
                            </Text>
                            <CustomSwitch isOn={isSubscribed} onChange={ value => handleInputChanges( value , 'isSubscribed')} />   
                        </View>
                        
                        <HeaderTitle title={ JSON.stringify( inputValues, null, 3 ) }/>

                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle : {
        color: 'black',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        margin: 10,
    }
});