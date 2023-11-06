import { configureStore } from '@reduxjs/toolkit';
import userReducer from './StateManagement/redux';


const store = configureStore({
    reducer: {
        // Регистрируем редюсер. тут каждое поле - ф-ция, кот будет обраб state
        user: userReducer,
    },

});
export default store;
