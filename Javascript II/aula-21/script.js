const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados");
const perfilMain = document.getElementById("link-perfil-main");

linkPerfil.addEventListener("mouseover", () => {
    navPerfil.style.display = "block";
})

linkPerfil.addEventListener("mouseout", () => {
    navPerfil.style.display = 'none';
})


document.addEventListener("keyup", (e) => {
    // console.log(e.key)
    // console.log(e.code)

    if(e.code == 'Digit1') {
        console.log(e.code)
        console.log('Abre o menu de perfil')
        navPerfil.style.display = 'block'
    }

})

document.addEventListener("keyup", (e) => {
    // console.log(e.key)
     console.log(e.code)

    if(e.code == 'Numpad1') {
        console.log(e.code)
        console.log('Abre o menu de perfil')
        navPerfil.style.display = 'block'
    }

})

document.addEventListener("keyup", (e) => {
    // console.log(e.key)
    // console.log(e.code)

    if(e.code == 'Digit2') {
        console.log(e.code)
        console.log('Abre o menu de postagens')
        navPerfil.style.display = 'block'
    }

})

document.addEventListener("keyup", (e) => {
    // console.log(e.key)
    // console.log(e.code)

    if(e.code == 'Numpad2') {
        console.log(e.code)
        console.log('Abre o menu de postagens')
        navPerfil.style.display = 'block'
    }

})

window.addEventListener('keyup', (e) => {
    // console.log(e.key)
    // console.log(e.code)
    if(navPerfil.style.display == 'block') {
        if(e.code == 'Digit1') {
            linkPerfilDados.click();
        }
        else if(e.code == 'Digit1') {
            navPerfil.style.display == 'block';
        }
    }
})

document.addEventListener('keyup', (e) => {
    if (e.code == 'Backspace') {
        perfilMain.click();
    }   
})