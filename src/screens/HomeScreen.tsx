import React from 'react';
import { View, FlatList} from 'react-native';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

    return (
        <View
            style={{ flex: 1, ...styles.globalMargin }}
        >
            <FlatList
                data={ menuItems }
                renderItem={ ({ item, index }) => <FlatListMenuItem menuItem={ item }/>}
                keyExtractor={ (item) => item.name }
                ListHeaderComponent={ () => <HeaderTitle title="Opciones de Menu"/> }
                ItemSeparatorComponent = {() => <ItemSeparator/>}
                scrollEnabled={false}
            />
        </View>
    )
}
