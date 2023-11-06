import { User } from "../models/models";

export const UserActions = {
    userSet: '[USER_STATE] USER_SET',
    authSet: '[USER_STATE] USER_AUTH',
}

// глобальный стейт
interface State {
    user: User | null;
    counter: number;
    isAuth: boolean;
}

type Action = { type: string, payload?: any };

//исходный стейт 
const initialState: State = {
    user: {username: "", password: ""},
    counter: 15,
    isAuth: false,
}

// редюсер - функция, на основе входного объекта 
// меняющая стейт и возвращающая новый
const userReducer = (state = initialState, action: Action) => {
    console.log('ape',state);
    switch (action.type) {
        case UserActions.userSet: 
            return { ...state, user: action.payload };
        case UserActions.authSet: 
            return { ...state, isAuth: action.payload };
        default:
            return state;
    }
};
export default userReducer;