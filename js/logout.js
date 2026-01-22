function logout() {
    localStorage.removeItem('teumsae_user');
    sessionStorage.removeItem('teumsae_user');
    window.location.href = 'login.html';
}
