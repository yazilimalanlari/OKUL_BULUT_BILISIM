import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';


const Regions = ({
    list,
    style,
    select,
    selected
}) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => select(item)}>
            <Text style={{
                padding: 8,
                fontSize: 18,
                textAlign: 'center',
                borderBottomWidth: 2,
                borderBottomColor: '#151515',
                ...(selected === item ? { color: '#25e322', fontWeight: 'bold' } : { color: '#000000' })
            }}>{item}</Text>
        </TouchableOpacity>
    )

    return (
        <FlatList 
            data={list}
            renderItem={renderItem}
            keyExtractor={name => name}
            style={style}
        />
    );
}

export default Regions;