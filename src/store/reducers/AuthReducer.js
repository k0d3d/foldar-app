

const initialState = {
    auth: {
        email: '',
        idToken: '',
        localId: '',
        expiresIn: '',
        refreshToken: '',
    },
    errorMessage: '',
    successMessage: '',
    showLoading: false,
};

export function AuthReducer(state = initialState, _action) {

    return state;
}

    
