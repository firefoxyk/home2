import { User } from "../models/models";

export const UserActions = {
    userAuth: '[USER_STATE] USER_AUTH',
    userRegister: '[USER_STATE] USER_REGISTER'
}

// глобальный стейт
interface RootState {
    user: User | null;
    isAuthenticated: boolean;
    users: User[]; // предположим, что у вас есть массив пользователей
}

type UserPayload = {
    email: string;
    password: string;
};

type Action = {
    type: string,
    payload?: UserPayload
};

//исходный стейт 
const initialState: RootState = {
    user: null,
    isAuthenticated: false,
    users: [{email:"marussia02@gmail.com",password:"123"}]
}

// редюсер - функция, на основе входного объекта 
// меняющая стейт и возвращающая новый
//state - текущее состояние системы (initialState знач по умолч)
const userReducer = (state = initialState, action: Action) => {
    switch (action.type) {

        case UserActions.userRegister:
            if (action.payload) {
                const { email, password } = action.payload;
                // Создайте новый объект пользователя
                const newUser: User = { email, password };
                console.log('newUser',newUser);
                // Обновите стейт, добавляя нового пользователя в массив пользователей
                return {
                    ...state,
                    users: [...state.users, newUser]
                };
            }
            break;

        case UserActions.userAuth:
            if (action.payload) {
                const { email, password } = action.payload;
                // Здесь ты можешь выполнить дополнительные действия, например, запросить сервер для аутентификации
                // После успешной аутентификации ты можешь обновить стейт пользователей
                if (!email || !password) {
                    // обработка случая, когда данные email и password отсутствуют или неверны
                    return state;
                }
                return {
                    ...state,
                    user: { email, password },
                    isAuthenticated: true
                };
            }
            break;

        default:
            return state;
    }
};
export default userReducer;