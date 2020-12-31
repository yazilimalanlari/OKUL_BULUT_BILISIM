import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { $get } from '@app/api';
import $ from '@styles/home';

/**
 * @author Abdulbaki Zırıh
 * @description HomePage Component'i ilk uygulama açıldığında Layout Component'i 
 * altında gelecek olan component'tir.
 */
const HomePage = ({ onOpenDailyMenu }) => {
    const [notFound, setNotFound] = useState(false);
    const [restaurants, setRestaurants] = useState([]);

    const onSearch = async ({ nativeEvent: e }) => {
        const result = await $get('search', {
            entity_type: 'city',
            sort: 'rating',
            order: 'asc',
            q: e.text
        });
        
        const isFound = result !== false && result.results_found > 0;
        setNotFound(!isFound);
        setRestaurants(isFound ? result.restaurants : []);
    }

    return (
        <View style={$.container}>
            <TextInput
                style={$.search}
                placeholder="Ara..."
                placeholderTextColor="#ffffff50"
                onChange={onSearch}
            />
            {notFound 
            ? <Text style={$.notFoundText}>Arama sonucu bulunamadı.</Text>
            : <FlatList
                data={restaurants}
                renderItem={({ item }) => (
                    <TouchableOpacity style={$.listItem} onPress={() => onOpenDailyMenu(item.restaurant)}>
                        <Text style={$.listItemTitle}>{item.restaurant.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.restaurant.id}
            />}
        </View>
    )
}

export default HomePage;