import React from 'react';

// Redux
import { Provider } from 'react-redux';
import store from '@redux/store';

// Pages
import Home from '@pages/Home';


const App = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
}

export default App;