import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { $get } from '@app/api';
import $ from '@styles/dailyMenu';

const DailyMenu = ({ restaurant, onClose }) => {
    const [error, setError] = useState();
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await $get('/dailymenu', {
                res_id: restaurant.R.id
            });

            if (!result) {
                setError("Günlük menü bulunamadı!");
            } else {
                setError(false);
                setData(result.daily_menus);
            }
        })();
    }, [restaurant]);

    return (
        <View style={$.container}>
            <TouchableOpacity style={$.closeIconWrapper} onPress={onClose}>
                <Text style={$.closeIcon}>&times;</Text>
            </TouchableOpacity>
            <Text style={$.title}>{restaurant.name}</Text>
            {error === false
            ? <FlatList 
                data={data}
                renderItem={({ item }) => (
                    <View>
                        <Text style={[
                            $.text, 
                            { 
                                padding: 10,
                                fontSize: 20 
                            }
                        ]}>{item.daily_menu.name}</Text>
                        {item.daily_menu.dishes.map(item => (
                            <View key={item.dish.dish_id} style={{ paddingLeft: 25 }}>
                                <Text style={[
                                    $.text,
                                    {
                                        fontSize: 16
                                    }
                                ]}>{item.dish.name}</Text>
                            </View>
                        ))}
                    </View>
                )}
                keyExtractor={item => item.daily_menu.daily_menu_id}
            />
            : <Text style={$.error}>{error}</Text>}
        </View>
    )
}


export default DailyMenu;