import { User } from "../models/models";

export const UserActions = {
    userAuth: '[USER_STATE] USER_AUTH',
    userRegister: '[USER_STATE] USER_REGISTER'
}

export interface RootState {
    user: User | null;
    userList: User[]; 
}

type UserPayload = {
    email: string;
    password: string;
};

type Action = {
    type: string,
    payload?: UserPayload
};

const initialState: RootState = {
    user: null,
    userList: [{ email: "marussia02@gmail.com", password: "123" , isAuthenticated: false}]
}

const userReducer = (state = initialState, action: Action) => {
    console.log('state', state);
    switch (action.type) {

        case UserActions.userRegister:
            if (action.payload) {
                const { email, password } = action.payload;

                const newUser: User = { email, password, isAuthenticated: false };
                if (!state.userList.some(user => user.email === email)) {
                    return {
                        ...state,
                        userList: [...state.userList, newUser]
                    }
                };

                return state;
            }
            break;

        case UserActions.userAuth:
            console.log('state', state);
            if (action.payload) {
                const { email, password } = action.payload;
                console.log('email', email);
                console.log('password', password);
                if (state.userList.some(user => user.email === email) && state.userList.some(user => user.password === password)) {
                    console.log('1');
                    return {
                        ...state,
                        user: { email, password, isAuthenticated: true }
                    };
                }
                else{
                    
                    return state;

                }


            }
            break;

        default:
            return state;
    }
};
export default userReducer;