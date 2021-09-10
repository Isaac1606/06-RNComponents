import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MenuItem } from '../interfaces/appInterfaces';
import { useNavigation } from '@react-navigation/core';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={ () => navigation.navigate( menuItem.component as any )}
        >
            <View style={styles.container}>
                <Icon
                    name={ menuItem.icon }
                    color="gray"
                    size={ 17 }
                />
                
                <Text style={styles.itemText}>{menuItem.name}</Text>

                <View style={{ flex: 1 }}></View>

                <Icon
                    name="chevron-forward-outline"
                    color="gray"
                    size={ 17 }
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 8,
        fontSize: 17
    },
});
