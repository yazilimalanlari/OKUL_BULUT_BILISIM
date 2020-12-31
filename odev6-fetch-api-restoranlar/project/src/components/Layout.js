import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import HomePage from './HomePage';
import DailyMenu from './DailyMenu';

const Layout = () => {
    const [restaurant, setRestaurant] = useState(null);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {restaurant == null 
            ? <HomePage onOpenDailyMenu={restaurant => setRestaurant(restaurant)}/>
            : <DailyMenu restaurant={restaurant} onClose={() => setRestaurant(null)} />}
        </SafeAreaView>
    )
}


export default Layout;