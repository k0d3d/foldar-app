export const isAuthenticated = (state) => {
    return true
    if (state.auth.auth.idToken) return true;
    return false;
};
