import React, { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {
    
    // Variable que indica el estado del refresh 
    const [ refreshing, setRefreshing ] = useState<boolean>(false);
    
    const [ data, setData ] = useState<string>();

    // Funcion a ejecutar una vez que termine el refreshing 
    const onRefresh = () => {
        setRefreshing( true ); 

        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing( false );
            setData('Hola Mundo');
        }, 1000);

    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={ refreshing } // controla el refresh
                    onRefresh={ onRefresh } // indica la funcion a ejecutar despues del refresh
                    // SOLO EN ANDROID 
                    progressViewOffset={10}
                    progressBackgroundColor="#5856D6"
                    colors={ ['black', ]} // cambia conforme el tiempo
                    // FIN DE PROPIEDADES SOLO EN ANDROID 

                    // SOLO EN IOS
                    // style={{ backgroundColor: '#5856D6'}}
                    tintColor='black'
                    // FIN DE PROPIEDADES SOLO EN IOS
                />
            }
        >
            <View
                style={styles.globalMargin}
            >
                <HeaderTitle title="Pull to Refresh"/>
                { data && <HeaderTitle title={ data }/>}
            </View>
            

        </ScrollView>

    )
};
