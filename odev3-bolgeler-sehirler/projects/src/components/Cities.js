import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Cities = ({ 
    style,
    name,
    cities
}) => {
    return (
        <View style={[style, { padding: 10 }]}>
            {name && (
                <>
                    <Text>{name} bölgesine ait şehirler.</Text>
                    <ScrollView>
                        {cities.map(city => 
                        <View key={city.plateCode}
                            style={{
                                padding: 10
                            }}>
                            <Text>Şehir adı: {city.name}</Text>
                            <Text>Nüfusu: {city.population}</Text>
                            <Text>Plaka kodu: {city.plateCode}</Text>
                        </View>)}
                    </ScrollView>
                </>
            )}
        </View>
    );
}

export default Cities;