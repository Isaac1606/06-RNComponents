import React from 'react'
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme';

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", ]
    }
];

interface Casas {
    casa: string;
    data: string[];
}

export const CustomSectionListScreen = () => {
    return (
        <View style={{...styles.globalMargin, flex: 1}}>
            {/*<HeaderTitle title="SectionList"/>*/}
            <SectionList
                // Arreglo con el que poblara la seccion de listas
                sections={ casas } // 'casas' es el arreglo
                // KeyExtractor para asignar a cada elemento una key unica
                keyExtractor={ (item, index) => item + index }
                // Por cada elemento del arreglo como se renderizara en un componente
                renderItem={ ({item,index}) => <Text> {item}</Text> }
                // Componente header que separa cada elemento del arreglo 
                // 'section' es el atributo que se desestructura del parametro info para poder acceder a cada item 
                // en este caso lo renombre a item pero no es necesario 
                renderSectionHeader={ ({section:item}) => <HeaderTitle title={item.casa}/>} // casa es una popiedad de cada elemento del arreglo 'casas'
                
                // Componente Footer que separa cada lista dentro de la seccion
                renderSectionFooter={({ section:item }) => (
                    <HeaderTitle title={'Total: ' + item.data.length }/>
                )}
                // Para controlar una animacion que se ve muy bien 
                stickySectionHeadersEnabled={true}
                // Componente para separar por secciones 
                SectionSeparatorComponent={ () => <ItemSeparator/> }
                // Componente para separar por elementos de cada seccion
                ItemSeparatorComponent={ () => <ItemSeparator/> }
                // Deshabilitar por default se ve mejor
                showsVerticalScrollIndicator={ false }
                
                // Header y Footer para toda la SectionList
                ListHeaderComponent={ () => <HeaderTitle title="SectionList"/>}
                ListFooterComponent={ () => <HeaderTitle title={"Total Items: " + casas.length}/>}
            />
        </View>
    )
}
