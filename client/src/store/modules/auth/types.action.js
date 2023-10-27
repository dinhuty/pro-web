export const AuthAction = {
    remote: {
        LOGIN: 'LOGIN',
        REGISTER: 'REGISTER',
        IS_VALID_TOKEN: 'IS_VALID_TOKEN',
    },
    local: {
        SET_USER: 'SET_USER',
        LOGOUT: 'LOGOUT',
        IS_REGISTERING: 'IS_REGISTERING',
        IS_LOGGING_IN: 'IS_LOGGING_IN',
        IS_LOGGED_IN: 'IS_LOGGED_IN',
        REGISTER_SUCCESS: 'REGISTER_SUCCESS',
        REGISTER_FAILURE: 'REGISTER_FAILURE',
        LOGIN_SUCCESS: 'LOGIN_SUCCESS',
        LOGIN_FAILURE: 'LOGIN_FAILURE',
    }
};