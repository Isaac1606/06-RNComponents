import React from 'react';
import { Text, View, FlatList} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

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
                ListHeaderComponent={ () => <HeaderTitle title="Opciones de Menu"/> }
                ItemSeparatorComponent = {itemSeparator}
                scrollEnabled={false}
            />
        </View>
    )
}
