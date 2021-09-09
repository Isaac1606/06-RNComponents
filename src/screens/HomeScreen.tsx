import React from 'react';
import { Text, View, FlatList} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { MenuItem } from '../interfaces/appInterfaces';
import { styles } from '../theme/appTheme';

// Arreglo con el cual se populará el FlatList
const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    }
];

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    // Componente que fungira como Header para la FlatList
    const renderListHeader = () => {
        return (
            <View
                style={{ marginTop: top + 10, marginBottom: 20 }}
            >
                <Text style={ styles.title }>
                    Opciones de Menú                 
                </Text>
            </View>
        );
    }

    // Componente que fungirá como Separador entre los elementos de la FlatList
    const itemSeparator = () => {
        return (
            <View
                style={{ 
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginVertical: 5
                }}
            >
            </View>
        );
    }

    return (
        <View
            style={{ flex: 1, ...styles.globalMargin }}
        >
            <FlatList
                data={ menuItems }
                renderItem={ ({ item, index }) => <FlatListMenuItem menuItem={ item }/>}
                keyExtractor={ (item) => item.name }
                ListHeaderComponent={ () => renderListHeader() }
                ItemSeparatorComponent = {itemSeparator}
            />
        </View>
    )
}
