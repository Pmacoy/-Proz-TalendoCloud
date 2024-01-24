const perfilMain = document.getElementById("link-perfil-main");

document.addEventListener('keyup', (e) => {
    if (e.code == 'Backspace') {
        perfilMain.click();
    }   
})