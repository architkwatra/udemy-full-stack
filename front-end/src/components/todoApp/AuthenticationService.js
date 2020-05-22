class AuthenticationService {
    registerSuccessfulLogin(userName, password) {
        sessionStorage.setItem('authenticatedUser', userName);
    }

    removeUserInfoFromSessionStorage() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        return sessionStorage.getItem('authenticatedUser') === null ? false : true;
    }
}

export default new AuthenticationService();