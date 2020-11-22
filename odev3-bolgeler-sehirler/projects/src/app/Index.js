import React, { useState } from 'react';
import { View, Text } from 'react-native';

import data from './data.json';

// Components
import Regions from '../components/Regions';
import Cities from '../components/Cities';

const Index = () => {
    const [selectedRegion, setSelectedRegion] = useState();

    const select = region => setSelectedRegion(region);

    return (
        <View style={{ flex: 1 }}>
            <Regions 
                list={Object.keys(data)}
                style={{ flexBasis: '50%' }}
                select={select}
                selected={selectedRegion} />
            <Cities 
                name={selectedRegion}
                cities={selectedRegion && data[selectedRegion]}
                style={{ flexBasis: '50%' }}
                />
        </View>
    )
}

export default Index;